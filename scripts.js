const stackAnimOn = (target) => {
    let element = document.getElementById(`${target}`);
    element.classList.add("animated", "flash");
}

const stackAnimOff = (target) => {
    let element = document.getElementById(`${target}`);
    element.classList.remove("animated", "flash");
}

const contact = () => {
    Swal.fire({
        imageUrl: 'assets/david-iskander-iWTamkU5kiI-unsplash.jpg',
        title: 'Contact Me',
        html: '<b>Gary Cameron</b> <br> ' +
            '<i class="fas fa-phone"></i>' +
            '<b> 07786 333999</a></b> <br> ' +
            '<i class="fas fa-at"></i> ' +
            '<b> cam.dev2019@gmail.com</b> <br> ',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i>',
        backdrop: `rgba(0,0,0,0.5)`
    })
}

const reload = () => {
    location.reload();
}

document.getElementById('duck').addEventListener('click', function () {
    Swal.fire({
        imageUrl: 'assets/Howard.gif',
        title: 'The Duck Says',
        html: '<b>Blame</b> <br> ' +
            '<b><i class="fab fa-git"></i></b> <br> ' +
            '<b>Have a Great Day</a></b> <br> ' +
            '<b>Peace Out Brother</b> <br> ',
        confirmButtonText: '<i class="far fa-hand-peace"></i></b>',
        backdrop: `rgba(0,0,0,0.5)`
    })
});

window.addEventListener('scroll', function () {
    function show() {
        document.getElementById('stackSection').style.display = "flex";
        document.getElementById('stackSection').classList.add('animated', 'fadeInRight')
    }
    setTimeout(3000, show());
});


// window.addEventListener('scroll', function () {
//     function show() {
//         let x = document.getElementsByClassName('stackItem')
//         for (let i = 0; i < x.length; i++) {
//             x[i].classList.add('animated', 'fadeInRight')
//         }

//         // document.getElementById('my-stack').style.visibility = "visible";
//         // x.classList.add('animated', 'fadeInRight')
//     }
//     setTimeout(3000, show());
// });

let array = ["Cycling", "Family Dog 'Rocket'", "Yoga", "Cooking", "Family", "Education", "Intelligence", "Teamwork", "Support", "Meeting", "Web", "Coding", "Chip", "Computer", "Data"]

const showInfo = (target) => {
    if (target == "bicycle") {
        document.getElementById('aboutTest').innerHTML = array[0];        
    } else if (target == "dog") {
        document.getElementById('aboutTest').innerHTML = array[1];
    } else if (target == "yoga") {
        document.getElementById('aboutTest').innerHTML = array[2];
    } else if (target == "cooking") {
        document.getElementById('aboutTest').innerHTML = array[3];
    } else if (target == "family") {
        document.getElementById('aboutTest').innerHTML = array[4];
    } else if (target == "education") {
        document.getElementById('aboutTest').innerHTML = array[5];
    } else if (target == "intelligence") {
        document.getElementById('aboutTest').innerHTML = array[6];
    } else if (target == "teamwork") {
        document.getElementById('aboutTest').innerHTML = array[7];
    } else if (target == "support") {
        document.getElementById('aboutTest').innerHTML = array[8];
    } else if (target == "meeting") {
        document.getElementById('aboutTest').innerHTML = array[9];
    } else if (target == "web") {
        document.getElementById('aboutTest').innerHTML = array[10];
    } else if (target == "coding") {
        document.getElementById('aboutTest').innerHTML = array[11];
    } else if (target == "chip") {
        document.getElementById('aboutTest').innerHTML = array[12];
    } else if (target == "computer") {
        document.getElementById('aboutTest').innerHTML = array[13];
    } else if (target == "data") {
        document.getElementById('aboutTest').innerHTML = array[14];
    } else {
        return;
    }
};

const hideInfo = () => {
    document.getElementById('aboutTest').innerHTML = "";
};





const navAction = (id) => {
    const target = document.getElementById(id)
    target.scrollIntoView()
}

// NAVBURGER Function
const navBurger = () => {
    var x = document.getElementById("right-side");
    if (x.className === "rightNav") {
      x.className += " responsive";
    } else {
      x.className = "rightNav";
    }
  }

  const showStack = () => {
      let stacksec2 = document.getElementById("stackSection2")
      stacksec2.style.display = 'block';
  }

//   window.addEventListener('load', startDuck)

// const startDuck = () => {
//     let elem = document.getElementById('images1');
//     let pos = 0;
//     let id = setInterval(frame, 5);
//     function frame() {
//         if (pos == 350) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
        
//     }
// }

// JAVASCRIPT NAVIGATION

