

const loadFoodApi = async () => {

    try{
        const url = await fetch( `https://www.themealdb.com/api/json/v1/1/list.php?c=list`);

    const  data = await url.json();

    // console.log(data)
        await loadCaterogy(data);

    } catch(error){
        console.log(error);
    }
}


loadFoodApi();



const loadCaterogy =  async (datas)=>{

    const navUl = document.getElementById('all-caterogy');

    datas.meals.forEach(data => {
        // console.log(data);
    
        // <li class="tm-paging-item"><a href="#" class="tm-paging-link active">Pizza</a></li>
        // <li class="tm-paging-item"><a href="#" class="tm-paging-link">Salad</a></li>
        // <li class="tm-paging-item"><a href="#" class="tm-paging-link">Noodle</a></li>

        const li = document.createElement('li');
        li.classList.add('tm-paging-item');
       li.innerHTML =  `<a href='#' class='tm-paging-link'>${data.strCategory} </a>`;

        navUl.appendChild(li);

    });

    // show galary

   // console.log(datas);

}

//click envet 

document.getElementById('all-caterogy').addEventListener('click', function(event){
    event.preventDefault();
   // console.log(event);
    //console.log(event.target.innerText);
    loadGalleryFood(event.target.innerText);

   

});


const loadGalleryFood = async (data)=>{

    try{
        const url = await  `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`;
        const fetchData = await fetch(url);
        const convertJson = await fetchData.json();
        //  console.log(fetchData.url);
         console.log(convertJson);
        const getNewUrl = convertJson;

        // show gallerry image and title 

        const galalryImage = document.getElementById('galalryImage');

        galalryImage.innerText = '';
      
        const div = document.createElement('div');
        // add id 
        div.setAttribute('id',`tm-gallery-page-${data}`);
        div.classList.add('tm-gallery-page');
      

        getNewUrl.meals.forEach(getData => {
          const article = document.createElement('article');
          article.className = 'col-lg-4 col-md-4 col-sm-6 col-12 tm-gallery-item';
          
          
            const allHtml = `
            
            <article class="">
                <figure>
                    <img src="${getData.strMealThumb}" alt="Image" class="img-fluid tm-gallery-img" />
                    <figcaption>
                        <h4 class="tm-gallery-title">${getData.strMeal}</h4>
                        <h5 class="tm-gallery-title" style="text-align:center; font-size:20px; color:black;">${getData.strCategory}</h5>
                        <h6 class="tm-gallery-title"> State Are : ${getData.strArea}</h6>
                        <p class="tm-gallery-description">${getData.strInstructions.slice(0,120)}</p>
                        <p class="tm-gallery-price">$45 / $55</p>
                    </figcaption>
                </figure>
            </article>
            `;

            article.innerHTML = allHtml;
            div.appendChild( article);

            galalryImage.appendChild(div);

            console.log("get Data ", getData);
        });
       



      //  console.log(getNewUrl);
    }catch(error){
        console.log(error);
    }
    
     
}




const loadAllFood = async()=>{

    try{
        const url = await  `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;
        const fetchData = await fetch(url);
        const convertJson = await fetchData.json();
        //  console.log(fetchData.url);
         console.log(convertJson);
        const getNewUrl = convertJson;

        // show gallerry image and title 

        const galalryImage = document.getElementById('galalryImage');

        galalryImage.innerText = '';
      
        const div = document.createElement('div');
        // add id 
        div.setAttribute('id',`tm-gallery-page`);
        div.classList.add('tm-gallery-page');
      

        getNewUrl.meals.forEach(getData => {
          const article = document.createElement('article');
          article.className = 'col-lg-4 col-md-4 col-sm-6 col-12 tm-gallery-item';
          
          
            const allHtml = `
            
            <article class="">
                <figure>
                    <img src="${getData.strMealThumb}" alt="Image" class="img-fluid tm-gallery-img" />
                    <figcaption>
                        <h4 class="tm-gallery-title">${getData.strMeal}</h4>
                        <h5 class="tm-gallery-title" style="text-align:center; font-size:20px; color:black;">${getData.strCategory}</h5>
                        <h6 class="tm-gallery-title"> State Are : ${getData.strArea}</h6>
                        <p class="tm-gallery-description">${getData.strInstructions.slice(0,120)}</p>
                        <p class="tm-gallery-price">$45 / $55</p>
                    </figcaption>
                </figure>
            </article>
            `;

            article.innerHTML = allHtml;
            div.appendChild( article);

            galalryImage.appendChild(div);

           // console.log("get Data ", getData);
        });
       



      //  console.log(getNewUrl);
    }catch(error){
        console.log(error);
    }
}


loadAllFood();


const singleFoodLoad = async ()=>{

    const url = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);

    let data = await url.json();

    data = data.meals[0];

    console.log(data);

    const singleProduct = document.getElementById('single-product');

    singleProduct.innerHTML = `
    <div class="row">
    <div class="col-md-6">
        <figure class="tm-description-figure">
            <img src="${data.strMealThumb}" alt="Image" class="img-fluid" />
        </figure>
    </div>
    <div class="col-md-6">
        <div class="tm-description-box"> 
            <h4 class="tm-gallery-title">${data.strMeal}</h4>
            <p class="tm-mb-45"> ${data.strInstructions} </p>
        </div>
    </div>
</div>
    `;
}


singleFoodLoad();