export const submitForm = (setIsShowModal) => {
  setIsShowModal(true);

  setTimeout(() => {
    setIsShowModal(false);
  }, 5000);
};
