/*
  Poki integration boundary.
  Local development works without the SDK. During Poki submission, add Poki's
  approved SDK script before this file; these events will then be forwarded.
*/
window.PokiBridge = {
  loadingFinished() {
    if (window.PokiSDK?.gameLoadingFinished) window.PokiSDK.gameLoadingFinished();
  },
  gameplayStart() {
    if (window.PokiSDK?.gameplayStart) window.PokiSDK.gameplayStart();
  },
  gameplayStop() {
    if (window.PokiSDK?.gameplayStop) window.PokiSDK.gameplayStop();
  }
};
