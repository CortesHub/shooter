/**************************************************
** GAME IMPORT
**************************************************/
// CLASS
import { playerById } from '../js/game/helperFunction';
import { Keys } from '../js/class/keys';
import { Player } from '../js/class/player';
import { setEventHandlers, onKeydown, onKeyup, onResize, onNewPlayer, onMovePlayer } from '../js/class/events';

// GAME
import { canvas, ctx, keys,	localPlayer, remotePlayers } from '../js/game/game';
import { init, update, draw, animate } from '../js/game/game';

/**************************************************
** INIT
**************************************************/
init();
animate();

// Player test
console.log(localPlayer);

// Keys test
console.log(keys);
