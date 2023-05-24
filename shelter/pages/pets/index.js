/*burger*/

const burgerIcon = document.querySelector('.burger-icon');
const headerNav = document.querySelector('.header-navigation');
const oneSpan = document.querySelector('.one-span');
const toggleMenu = () => {
    document.body.classList.toggle('lock');
    headerNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
    oneSpan.classList.toggle('active');
}

burgerIcon.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_headerNav = target == headerNav || headerNav.contains(target);
    let its_burgerIcon = target == burgerIcon;
    let headerNav_is_active = headerNav.classList.contains('active');
    if (!its_headerNav && !its_burgerIcon && headerNav_is_active) {
        toggleMenu();
    }

    if (burgerIcon.classList.contains('active')) {
        document.body.classList.remove('lock');
        headerNav.classList.remove('active');
        burgerIcon.classList.remove('active');
        oneSpan.classList.remove('active');
    }
})

/*pop-up*/

const pets = [
    {
        name: 'Jennifer',
        breed: 'Dog - Labrador',
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age: '2 months',
        inoculation: 'none',
        diseases: 'none',
        parasites: 'none',
        photo: 'pets-jennifer1280.png'
    },
    {
        name: 'Sophia',
        breed: 'Dog - Shih tzu',
        description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age: '2 years',
        inoculation: 'none',
        diseases: 'none',
        parasites: 'none',
        photo: 'pets-sofhia1280.png'
    },
    {
        name: 'Woody',
        breed: 'Dog - Golden Retriever',
        description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        age: '3,5 years',
        inoculation: 'none',
        diseases: 'none',
        parasites: 'none',
        photo: 'pets-woody1280.png'
    },
    {
        name: 'Scarlett',
        breed: 'Dog - Jack Russell Terrier',
        description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        age: '3 years',
        inoculation: 'none',
        diseases: 'none',
        parasites: 'none',
        photo: 'pets-scarlet1280.png'
    },
    {
        name: 'Katrine',
        breed: 'Cat - British Shorthair',
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        age: '4 years',
        inoculation: 'none',
        diseases: 'none',
        parasites: 'none',
        photo: 'pets-katrine1280.png'
    },
    {
        name: 'Timmy',
        breed: 'Cat - British Shorthair',
        description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        age: '2,5 years',
        inoculation: 'none',
        diseases: 'none',
        parasites: 'none',
        photo: 'pets-timmy1280.png'
    },
    {
        name: 'Freddie',
        breed: 'Cat - British Shorthair',
        description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        age: '5 years',
        inoculation: 'none',
        diseases: 'none',
        parasites: 'none',
        photo: 'pets-freddie1280.png'
    },
    {
        name: 'Charly',
        breed: 'Dog - Jack Russell Terrier',
        description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        age: '3 years',
        inoculation: 'none',
        diseases: 'none',
        parasites: 'none',
        photo: 'pets-charly1280.png'
    },
];

const cards = document.querySelectorAll('.shell');
const popup = document.querySelector('.popup');
const animalPhoto = document.querySelector('.popup-img');
const closePopup = document.querySelector('.close-popup');
const prevPage = document.querySelector('.prevPage');
const nextPage = document.querySelector('.nextPage');
const firstPage = document.querySelector('#firstPage');
const lastPage = document.querySelector('#lastPage');
const animalName = document.querySelector('#name');
const animalBreed = document.querySelector('#breed');
const animalDescription = document.querySelector('#description');
const animalAge = document.querySelector('#age');
const animalInoculation = document.querySelector('#inoculation');
const animalDiseases = document.querySelector('#diseases');
const animalParasites = document.querySelector('#parasites');
let cardsNumber = 0;
let startNumber = 0;
let page = 1;
let pageNumber = document.querySelector('.page');

const showCards = (startNumber = 0) => {
    for (let i = 0; i < cards.length; i++) {
        let img = cards[i].querySelector('.img-btn');
        let name = cards[i].querySelector('.name-pets');
        let animalsNumber = (startNumber + i);
        if ((animalsNumber >= 0) && (animalsNumber < items.length)) {
            img.src = `../../assets/images/${pets[items[animalsNumber]].photo}`;
            name.innerHTML = pets[items[animalsNumber]].name;
            cards[i].id = pets.indexOf(pets[items[animalsNumber]]);
        }
    }
    pageNumber.innerHTML = page;
}

const getNumber = () => {
    let numbersCards = 0;
    for (let i = 0; i < cards.length; i++) {
        if (getComputedStyle(cards[i], null).display != 'none') numbersCards++;
    }
    return numbersCards;
}

const shuffle = () => {
    const items = [...Array(8).keys()];
    let l = pets.length;
    while (l > 1) {
        l--;
        let k = Math.floor(Math.random() * l);
        [items[k], items[l]] = [items[l], items[k]];
    }
    return items;
}

const getRightPage = () => {
    let nextPage = getNumber();
    if ((startNumber + nextPage) < items.length) {
        startNumber += nextPage;
        page = Math.floor(startNum / numberPerPage) + 1;
        showCards(startNumber);
    }
    disablePageButton();
}

const getLeftPage = () => {
    let nextPage = getNumber();
    if ((startNumber - nextPage) < items.length) {
        startNumber -= nextPage;
        page = Math.floor(startNum / numberPerPage) + 1;
        showCards(startNumber);
    }
    disablePageButton();
}

const getFirstPage = () => {
	startNum = 0;
	page = 1;
	showCards(startNumber);
	disablePageButton();
}

const getLastPage = () => {
	let nextPage = getNumber();
	startNum = items.length - nextPage;
	page = items.length / nextPage;
	showCards(startNumber);
	disablePageButton();
}

const disablePageButton = () => {
	let lastPageNumber = items.length / getNumber();
	switch (page) {
		case 1: {
			prevPage.classList.add('disabled');
			firstPage.classList.add('disabled');
			nextPage.classList.remove('disabled');
			lastPage.classList.remove('disabled');
			break;
		}
		case lastPageNumber: {
			nextPage.classList.add('disabled');
			lastPage.classList.add('disabled');
			prevPage.classList.remove('disabled');
			firstPage.classList.remove('disabled');
			break;
		}
		default: {
			nextPage.classList.remove('disabled');
			lastPage.classList.remove('disabled');
			prevPage.classList.remove('disabled');
			firstPage.classList.remove('disabled');
		}
	}
}

const startPopup = (e) => {
    let idCard = e.currentTarget.id;
    animalPhoto.src = `../../assets/images/${pets[idCard].photo}`;
    animalName.innerHTML = pets[idCard].name;
    animalBreed.innerHTML = pets[idCard].breed;
    animalDescription.innerHTML = pets[idCard].description;
    animalAge.innerHTML = pets[idCard].age;
    animalInoculation.innerHTML = pets[idCard].inoculation;
    animalDiseases.innerHTML = pets[idCard].diseases;
    animalParasites.innerHTML = pets[idCard].parasites;
}

const togglePopup = (e) => {
    if (!popup.classList.contains('visible')) startPopup(e);
    popup.style.display = 'flex';
}

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', togglePopup);
}

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
})

const items = shuffle();
showCards();

/*paginaciya*/

