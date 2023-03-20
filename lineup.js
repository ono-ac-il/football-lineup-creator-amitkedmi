const players = [
    { name: 'Ronaldo', position: 'forward' },
    { name: 'Messi', position: 'forward' },
    { name: 'Neymar', position: 'forward' },
    { name: 'Modric', position: 'midfielder' },
    { name: 'Kroos', position: 'midfielder' },
    { name: 'De Bruyne', position: 'midfielder' },
    { name: 'Alaba', position: 'defender' },
    { name: 'Ramos', position: 'defender' },
    { name: 'Varane', position: 'defender' },
    { name: 'Neuer', position: 'goalkeeper' },
    { name: 'Buffon', position: 'goalkeeper' },
    { name: 'Casillas', position: 'goalkeeper' }
]
/*filter all the goalkeeper from players array */
const goalkeeper = players.filter(function(player){
    return player.position == "goalkeeper";   
})

const mappedGoalkeepers = goalkeeper.map(function(item){
    return `<option value="${item.name}">${item.name}</option>`
});

document.getElementById('pos1').innerHTML = mappedGoalkeepers.join('');


