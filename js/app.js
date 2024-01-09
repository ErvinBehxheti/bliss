// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  //  linksContainer.classList.toggle('show-links');
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height
  if(containerHeight === 0){
      linksContainer.style.height = `${linksHeight}px`
  } else {
      linksContainer.style.height = 0;
  }


})

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
// ********** fixed navbar ************
window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const id=e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left:0,
            top: position
        })
        linksContainer.style.height = 0;
    })
})



// Ballina //
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
const collection = document.getElementsByTagName("*");

modalBtn.addEventListener('click', function() {
    modalOverlay.classList.add('open-modal');
    collection.classList.add('scrolly');
});

closeBtn.addEventListener('click', function() {
    modalOverlay.classList.remove('open-modal');
})

///////////////// Fundi i ballines ////////////

// Menyja //

const menu = [
    {
      id: 1,
      title: "Avokado Spring Rolls",
      category: "Antipaste",
      price: 8.02,
      img: "https://kirbiecravings.com/wp-content/uploads/2018/07/avocado-egg-rolls-5.jpg",
      desc: `Avokado e freskët,
      perime organike dhe petë
      orizi të mbështjellë në
      letër orizi. Shërbehet me
      një salcë soje të shijshme
      me xhenxhefil.`,
    },
    {
      id: 2,
      title: "Kërpudha të mbushura me Quinoa (Vegan & GF)",
      category: "Antipaste",
      price: 9.80,
      img: "https://minimalistbaker.com/wp-content/uploads/2017/07/DELICIOUS-Vegetable-Quinoa-Stuffed-Portobello-Mushrooms-30-min-healthy-SO-satisfying-vegan-glutenfree-plantbased-vegetables-recipes-minimalistbaker.jpg",
      desc: `Kërpudha me butona të
      mbushura me një
      përzierje të shijshme
      kuinoa organike, perime
      dhe barishte. I lyer me
      glazurë balsamike. `,
    },
    {
      id: 3,
      title: "Amerikane",
      category: "Pije",
      price: 1.99,
      img: "./images/pije/amerikane.jpg",
      desc: `Espreso e fortë e holluar me ujë të nxehtë për një kafe të ekuilibruar dhe të ndritshme. `,
    },
    {
      id: 4,
      title: "Sallatë me lakër organike dhe panxhar të pjekur (Vegan & GF)",
      category: "Supat-dhe-Sallatat",
      price: 11.59,
      img: "https://www.hauteandhealthyliving.com/wp-content/uploads/2021/03/Roasted-Beet-and-Carrot-Kale-Salad-1.jpg",
      desc: `Lakra jeshile e freskët
      organike, panxhar i
      pjekur, quinoa, domate
      qershi dhe avokado të
      hedhura në një salcë të
      shijshme limoni-tahini.`,
    },
    {
      id: 5,
      title: "Cappuccino",
      category: "Pije",
      price: 1.99,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/1200px-Cappuccino_at_Sightglass_Coffee.jpg",
      desc: `
      Espresso, qumësht i zier me avull dhe shkumë prej kadifeje - një përzierje harmonike për një kënaqësi të butë dhe kremoze.`,
    },
    {
      id: 6,
      title: "Machiato",
      category: "Pije",
      price: 1.99,
      img: "./images/pije/makiato.jpg",
      desc: `Një copë shkumë prej kadifeje sipër një kafeje të guximshme espres, një shpërthim i shpejtë i mirësisë së kafesë.`,
    },
    {
      id: 7,
      title: "Espresso",
      category: "Pije",
      price: 1.49,
      img: "./images/pije/espresso.webp",
      desc: `Kafe e përqendruar, duke dhënë një shpërthim intensiv shije dhe kafeine.`,
    },
    {
      id: 8,
      title: "Supë kremoze me domate borziloku (Vegan & GF)",
      category: "Supat-dhe-Sallatat",
      price: 8.92,
      img: "https://dishingouthealth.com/wp-content/uploads/2021/06/CreamyTomatoBasilSoup_Square.jpg",
      desc: `Supë me domate prej
      kadifeje e bërë me
      domate organike,
      qumësht kokosi dhe
      borzilok të freskët.
      Shërbehet me bukë
      hudhre pa gluten.`,
    },
    {
      id: 9,
      title: "Vanilla latte",
      category: "Pije",
      price: 2.49,
      img: "./images/pije/vanilla.jpg",
      desc: `Espreso e pasur takohet me qumësht kremoz, të mbushur me ëmbëlsi të butë vanilje.`,
    },
    {
      id: 10,
      title: "Spageti Organike Aglio e Olio",
      category: "Ushqimet-Kryesore",
      price: 13.37,
      img: "https://theplantbasedschool.com/wp-content/uploads/2022/04/Aglio-olio-1-1.jpg",
      desc: `Spageti pa gluten të
      hedhura me hudhër
      organike, vaj ulliri ekstra
      të virgjër, domate qershi
      dhe borzilok të freskët.
      Parmexhano (vegan-
      opsionale).`,
    },
    {
      id: 11,
      title: "Tas Vegan Buddha (Vegan & GF)",
      category: "Ushqimet-Kryesore",
      price: 15.16,
      img: "https://heartfultable.com/wp-content/uploads/2021/05/Quinoa-and-Chickpea-Buddha-Bowl-with-Tahini-Dressing-720x405.jpg",
      desc: `Një tas shumëngjyrësh
      me quinoa organike,
      patate të ëmbla të
      pjekura, avokado, fasule
      të zeza dhe një salcë
      tahini.`,
    },
    {
      id: 12,
      title: "Kerri organik i qiqrave dhe spinaqit (Vegan & GF)",
      category: "Ushqimet-Kryesore",
      price: 12.48,
      img: "https://shaneandsimple.com/wp-content/uploads/2018/05/AMAZING-20-minute-easy-vegan-chickpea-curry-chickpeas-and-tomato-vegan-glutenfree-plantbased-chickpea-curry-recipe-shaneandsimple-FEATURED.jpg",
      desc: `Një kerri i shijshëm i
      bërë me qiqra organike,
      spinaq dhe qumësht
      kokosi. Shërbehet me
      oriz basmati.`,
    },
    {
      id: 13,
      title: "Mousse me avokado dhe çokollatë (Vegan & GF)",
      category: "Embelsirat",
      price: 7.13,
      img: "https://nourishingamy.com/wp-content/uploads/2019/01/mint-chocolate-avocado-mousse-holy-moly-4.jpg",
      desc: `Mousse çokollatë i butë i
      butë i bërë me avokado të
      pjekur dhe kakao
      organike. Mbushur me
      manaferra.`,
    },
    {
      id: 14,
      title: "Sherbet i frutave organik (Vegan & GF)",
      category: "Embelsirat",
      price: 6.24,
      img: "https://www.blenderbabes.com/wp-content/uploads/sorbet.jpg",
      desc: `Sherbet freskues i bërë
      me një përzierje frutash
      organike.`,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <h1 class="header">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}€</h4>
              </h1>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["T'gjitha"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category.replace(/-/g, " ")}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "T'gjitha") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
  

/////////////