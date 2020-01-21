$(function() {
    let coursesList = '';

    for (let i = 1; i <= 10; i++) {
        coursesList += `
            <div class="course-card">
                <img src="assets/img/thumb.svg" alt="">
                
                <div>
                    <h5>Traitement des infections des tubercules</h5>
                    <a href="#" class="button-link button-link__header">Suivre la formation</a>
                </div>
            </div>
        `;
    }

    $("#courses-list").html(coursesList);
});