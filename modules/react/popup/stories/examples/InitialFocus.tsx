import React from 'react';

import {
  useCloseOnEscape,
  useCloseOnOutsideClick,
  Popup,
  usePopupModel,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {HStack} from '@workday/canvas-kit-react/layout';

export const InitialFocus = () => {
  const initialFocusRef = React.useRef(null);
  const model = usePopupModel({
    initialFocusRef,
  });

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <Popup model={model}>
      <Popup.Target>Send Message</Popup.Target>
      <Popup.Popper placement={'bottom'}>
        <Popup.Card width={400} padding="16px">
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Confirmation</Popup.Heading>
          <Popup.Body>
            <p id="popup-message">Your message has been sent!</p>
          </Popup.Body>
          <HStack spacing="s">
            <Popup.CloseButton ref={initialFocusRef} aria-describedby="popup-message">
              OK
            </Popup.CloseButton>
          </HStack>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
