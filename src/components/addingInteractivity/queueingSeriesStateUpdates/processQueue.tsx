export function getFinalState(baseState: number, queue: any[]) {
  let finalState = baseState;
  queue.forEach((que) => {
    if(typeof que === 'function') {
      finalState = que(finalState);
    } else {
      finalState = que;
    }
  });
  // TODO: do something with the queue...

  return finalState;
}
