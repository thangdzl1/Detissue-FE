import { getAjax, postAjax, jwtToken } from './api-ajax.js';//import các hàm getAjax và postAjax từ file api-ajax.js


export function getAllProduct(size, page) {
    console.log(jwtToken)
    page = 0;
    size = 3;
    return getAjax("product",
        {
            page: page,
            size: size
        },
        jwtToken
    ).then(function (response) {
        return response;
    }).catch(function (jqXHR) {
        swal("Failed!", "warning");
    });
}

export function getProductByID() {
    return getAjax("product/1",
        {

        },
    ).done(function (response) {
        return response;
    }).fail(function (jqXHR) {
        swal("Failed!", "warning");
    })

}

export function findUserWishlist() {
    return getAjax("user-wishlist/user",
        {

        },
        jwtToken
    ).done(function (response) {
        return response;
    }).fail(function (jqXHR) {
        console.log("Failed!", "warning");
    })
}

export function deleteUserWishlist(productId) {
    return getAjax("user-wishlist/delete",
        {
            productId: productId
        },
        jwtToken
    ).done(function (response) {
        return response;
    })
}

export function addUserWishlist(productId) {
    return getAjax("user-wishlist/add",
        {
            productId: productId
        },
    ).done(function (response) {
        return response;
    }).fail(function (jqXHR) {
        swal("Failed!", "warning");
    })
}

export function getUserCartByUserID() {
    return getAjax("shopping-cart/user",
        {

        },
        jwtToken
    ).done(function (response) {
        return response;
    }).fail(function (jqXHR) {
        swal("Failed!", "warning");
    })
}

export function deleteUserCart(id) {
    return getAjax("shopping-cart/delete",
        {
            id: id
        },
        jwtToken
    ).done(function (response) {
        return response;
    })
}

export function getUserOrder() {
    return getAjax("shop-order/user",
        {

        },
    ).done(function (response) {
        return response;
    }).fail(function (jqXHR) {
        swal("Failed!", "warning");
    })
}

export function getAddressByUserID() {
    return postAjax("user/address",
        {

        },
    ).done(function (response) {
        return response;
    }).fail(function (jqXHR) {
        swal("Failed!", "warning");
    })
}
