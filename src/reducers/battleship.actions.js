export const SHOOT_ACTION = 'SHOOT_ACTION';
export const RESTART_ACTION = 'RESTART_ACTION';

export function shoot(i, j) {
  return {
    type: SHOOT_ACTION,
    payload: { i, j },
  };
}

export function restart() {
  return {
    type: RESTART_ACTION,
  };
}
