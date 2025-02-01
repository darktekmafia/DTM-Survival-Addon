import { world } from '@minecraft/server';

// Define the dynamic property for storing banned players (as a JSON string)
const bannedPlayersProperty = 'bannedPlayers';
if (!world.getDynamicProperty(bannedPlayersProperty)) {
    world.setDynamicProperty(bannedPlayersProperty, '[]');
}

// Function to get the list of banned players
function getBannedPlayers() {
    const bannedPlayersJson = world.getDynamicProperty(bannedPlayersProperty) || '[]';
    return JSON.parse(bannedPlayersJson);
}

// Function to set the list of banned players
function setBannedPlayers(bannedPlayers) {
    const bannedPlayersJson = JSON.stringify(bannedPlayers);
    world.setDynamicProperty(bannedPlayersProperty, bannedPlayersJson);
}

// Function to ban a player
export function banPlayer(player) {
    const bannedPlayers = getBannedPlayers();
    if (!bannedPlayers.includes(player.name)) {
        bannedPlayers.push(player.name);
        setBannedPlayers(bannedPlayers);
        player.addTag("PermaBanned");
        player.sendMessage("You have been permanently banned from this server.");
        player.runCommandAsync(`kick "${player.name}" "Banned players are not allowed to join."`).catch((error) => console.error(error));
        console.log(`Player ${player.name} has been banned.`);
    }
}

// Function to unban a player
export function unbanPlayer(playerName) {
    let bannedPlayers = getBannedPlayers();
    bannedPlayers = bannedPlayers.filter(name => name !== playerName);
    setBannedPlayers(bannedPlayers);
    console.log(`Player ${playerName} has been unbanned.`);
}

// Function to check for banned players on spawn and kick them if needed
function checkBannedPlayers(event) {
    const player = event.player;
    if (player) {
        const bannedPlayers = getBannedPlayers();
        if (bannedPlayers.includes(player.name)) {
            player.sendMessage("You are banned from this server.");
            player.runCommandAsync(`kick "${player.name}" "Banned players are not allowed to join."`).catch((error) => console.error(error));
            console.log(`Player ${player.name} is banned and has been kicked.`);
        }
    } else {
        console.log("Player object is undefined. Event data:", event);
    }
}

// Add event listener for player spawn
world.afterEvents.playerSpawn.subscribe((event) => {
    checkBannedPlayers(event);
});
