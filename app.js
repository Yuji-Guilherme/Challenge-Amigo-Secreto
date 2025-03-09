const friends = [];

const getName = () => document.getElementById('amigo').value.trim();

const getList = () => document.getElementById('listaAmigos');

const cleanInput = () => document.getElementById('amigo').value = '';

const cleanHtmlList = () => {
    const list = getList();
    list.innerHTML = '';
}

const addFriend = () => {
    const name = getName();

    if (name == '') {
        alert('Por favor, insira um nome.');
        cleanInput();
        return;
    }

    attFriendsList(name);

    cleanInput();
};

const attFriendsList = (name) => {
    friends.push(name);

    cleanHtmlList();

    const list = getList();

    for (let i = 0; i < friends.length; i++) {
        const li = document.createElement('li'); 
        li.textContent = friends[i]; 
        list.appendChild(li);
    }
}

const drawFriend = () => {
    if (friends.length == 0) return;

    const result = Math.floor(Math.random() * friends.length);
    const randomName = friends[result];
    
    cleanHtmlList();

    const htmlResult = document.getElementById('resultado');
    htmlResult.innerHTML = `O(A) amigo(a) sorteado(a) é: ${randomName}`;
}