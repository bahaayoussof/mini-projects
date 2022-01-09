// load js file after document loaded
$(document).ready(function () {

    // fetch data from json file
    $.ajax({
        url: "https://api.jsonbin.io/b/5e99f36b5fa47104cea282ff/4",
        dataType: "json",
        success: function (response) {
            $.each(response.apartments, function (i, apartment) {
                let apartmentClass = apartment.city.toLowerCase().replace(" ", "-");
                let listing = `<a href='#' id=${apartment.id} class='list-group-item ${apartmentClass} listings'>
                <h4 class='list-group-item-heading'> ${apartment.description} 
                / ${apartment.bedrooms} BR / ${apartment.price}</h4>
                <p class='list-group-item-text'> ${apartment.neighborhood}</p></a>`;
                $(".apartments").append(listing);
            });
        },
        error: function (error) {
            console.log(error);
        }
    });

    // filter shown apartments
    $(".filter").click(function () {
        $(".filter").removeClass("active");
        $(this).addClass("active");

        $(".listings").show();

        let city = $(this).attr("id");
        if (city != "all") {
            $(".listings").not(`.${city}`).css("display", "none");
        }
    });

    // open specefic address on google maps 
    $(document).on("click", ".listings", function () {
        let id = $(this).attr("id");

        $.ajax({
            url: "https://api.jsonbin.io/b/5e99f36b5fa47104cea282ff/4",
            dataType: "json",
            success: function (response) {
                let selectedApartment = $.grep(response.apartments, function (apartment) {
                    return apartment.id == id;
                });
                let address = selectedApartment[0].address;
                window.open(`http://maps.google.com/?q=${address}`);
            },
            error: function (error) {
                console.log(error);
            }
        });
    })
});
