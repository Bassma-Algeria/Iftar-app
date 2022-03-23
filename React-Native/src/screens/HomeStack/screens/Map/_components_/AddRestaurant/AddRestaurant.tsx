import React, {useState} from 'react';

import {styles} from './AddRestaurant.style';

import {ICONS} from '../../../../../../utils/constants/Icons';

import {Button} from '../../../../../../components/Button/Button';
import {Popup} from '../../../../../../components/Popup/Popup';
import {SubmitButton} from './_components_/SubmitButton';
import {AddRestaurantForm} from './_components_/AddRestaurantForm/AddRestaurantForm';

import {AddRestaurantFormContextProvider} from './_context_/AddRestaurantFormContextProvider';

const AddRestaurant: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  return (
    <>
      <AddRestaurantButton setIsPopupOpen={setIsFormOpen} />
      <AddRestaurantFormPopup isOpen={isFormOpen} setIsPopupOpen={setIsFormOpen} />
    </>
  );
};

interface Props {
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddRestaurantButton: React.FC<Props> = ({setIsPopupOpen}) => {
  return (
    <Button
      onPress={() => setIsPopupOpen(true)}
      style={styles.addRestaurantButtonContainer}
      icon={ICONS.plus}>
      أضف مطعم
    </Button>
  );
};

const AddRestaurantFormPopup: React.FC<Props & {isOpen: boolean}> = ({isOpen, setIsPopupOpen}) => {
  return (
    <Popup
      containerStyle={styles.container}
      onClose={() => setIsPopupOpen(false)}
      isOpen={isOpen}
      fullHight>
      <AddRestaurantFormContextProvider>
        <AddRestaurantForm />
        <SubmitButton />
      </AddRestaurantFormContextProvider>
    </Popup>
  );
};

export {AddRestaurant};
