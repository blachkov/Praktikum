const auth = '563492ad6f917000010000011127984e980e4191a1d8d31bd0c15d47';
const getpictures=document.querySelector(".get-pictures");
const checkbox1=document.querySelector(".filter-checkbox1");
const checkbox2=document.querySelector(".filter-checkbox2");
const checkbox3=document.querySelector(".filter-checkbox3");
const checkbox4=document.querySelector(".filter-checkbox4");
const input =document.querySelector("input");
let view = 'list';
let pagenr = 5;
let query = "";

async function SearchPhotos(query)
{
    const data=await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=5`,{
        method:"GET",
        headers: {
            Accept: "application/json",
            Authorization: auth,
        },
    }
    );
    const result = await data.json();
    result.photos.forEach((photo) => {
        const pic = document.createElement("div");
        pic.innerHTML = `<img src=${photo.src.medium}
            <p>Photographer : ${photo.photographer}</p>`;
            document.querySelector("#gallery").appendChild(pic);
        
    });
};



function clear() {
    document.querySelector("#gallery").innerHTML = "";
}

$('#get-pictures').click(()=> {
    clear();
    temp();
})

function temp(){
    if (checkbox3.checked && "#cat"){
        SearchPhotos(query = "cat",pagenr);
    }
    if (checkbox2.checked && "#ocean"){
        SearchPhotos(query = "ocean",pagenr);
    }
    if (checkbox4.checked && "#tigers"){
        SearchPhotos(query = "tigers",pagenr);
    }
    if (checkbox1.checked && "#nature"){
        SearchPhotos(query = "nature",pagenr);
    }
    if(checkbox1.checked == false && checkbox2.checked == false && checkbox3.checked == false && checkbox4.checked == false){
        SearchPhotos(query = "nature",pagenr);
    }
}



$('#grid-view').click(e => {
    $('#gallery').addClass('col-md-3').removeClass('row');
    clear();
    temp();
})

$('#list-view').click(e => {
    $('#gallery').removeClass('col-md-3').addClass('row');
    clear();
    temp();
})

temp();