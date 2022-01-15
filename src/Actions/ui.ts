import { types, UIAction } from '../Types/index';

export const setError = ( error: string ): UIAction => ({
  type: types.uiSetError,
  payload: error
});

export const removeError = (): UIAction => ({
  type: types.uiRemoveError
});

export const startLoading = (): UIAction => ({
  type: types.uiStartLoading
});

export const finishLoading = (): UIAction => ({
  type: types.uiFinishLoading
});
