loremimpsum = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
let i = 0

$(document).ready(function() {
    for(; i < 10; i++){
        addPost(i)
    }
    
        
});

$("#main_loadmore").click(function() {
    let n = i
    for(; i < n + 10; i++){
            addPost(i)
    }
})

function addPost(id){
    $(".main_container").append(`
        <section class="main_post">
            <div class="main_post_data">
                <h2 class="main_post_title">Post ${id}</h2>
                <p class="main_post_desc">${loremimpsum}</p>
                <a class="main_post_link" href=".">Read more...</a>
            </div>
            <a class="main_post_pic" href="#">
                <img alt="post preview" src="https://picsum.photos/200?random=${id}"/>
            </a>
        </section>`
    )
}
