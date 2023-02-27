function progressGame(next, update) {
    if (update) parent.postMessage(update);
    window.location = next;
}
