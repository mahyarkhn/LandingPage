loremimpsum = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
let i = 0

$(document).ready(function () {
    for (; i < 10; i++) {
        addPost(i)
    }
});

function loadPosts () {
    let n = i
    for (; i < n + 10; i++) {
        addPost(i)
    }
}

function addPost(id) {
    id += 1;
    $(".post_container").append(`
    <div
    class="card col-lg-4 col-md-6 col-sm-12 p-0 rounded-3 mx-3"
    style="width: 200px"
    >
        <img
            class="card-image-top rounded-top-3"
            alt="img"
            src="https://picsum.photos/200?random=${id}"
        />
        <div class="card-body">
            <div class="card-title">Post ${id}</div>
            <p
                class="card-text overflow-hidden lh-sm text-wrap"
                style="
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                "
            >
                ${loremimpsum}
            </p>
        </div>
        <a href="#" class="stretched-link link-success px-3 pb-3">
            Read more...
        </a>
    </div>`
    )
}
