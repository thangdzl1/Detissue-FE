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

export function getProductByID(page, limit) {
    new Promise(() => {
        getAjax("product/1",
            {
                page: page,
                limit: limit
            },
        ).done(function (response) {
            return response;
        }).fail(function (jqXHR) {
            swal("Failed!", "warning");
        })
    })
}

export function getUserWishlistByUserID(id) {
    new Promise(() => {
        getAjax("user-wishlist/user",
            {
                id: id
            },
        ).done(function (response) {
            return response;
        }).fail(function (jqXHR) {
            swal("Failed!", "warning");
        })
    })
}

export function getDeleteUserWishlist(userId, productId) {
    new Promise(() => {
        getAjax("user-wishlist/delete",
            {
                userId: userId,
                productId: productId
            },
        ).done(function (response) {
            return response;
        }).fail(function (jqXHR) {
            swal("Failed!", "warning");
        })
    })
}

export function getAddUserWishlist(userId, productId) {
    new Promise(() => {
        getAjax("user-wishlist/add",
            {
                userId: userId,
                productId: productId
            },
        ).done(function (response) {
            return response;
        }).fail(function (jqXHR) {
            swal("Failed!", "warning");
        })
    })
}

export function getUserCartByUserID(page, limit) {
    new Promise(() => {
        getAjax("shopping-cart/user",
            {
                page: page,
                limit: limit
            },
        ).done(function (response) {
            return response;
        }).fail(function (jqXHR) {
            swal("Failed!", "warning");
        })
    })
}

export function getUserOrder(page, limit) {
    new Promise(() => {
        getAjax("shop-order/user",
            {
                page: page,
                limit: limit
            },
        ).done(function (response) {
            return response;
        }).fail(function (jqXHR) {
            swal("Failed!", "warning");
        })
    })
}

export function postToGetAddressByUserID(id) {
    new Promise(() => {
        postAjax("user/address",
            {
                id: id
            },
        ).done(function (response) {
            return response;
        }).fail(function (jqXHR) {
            swal("Failed!", "warning");
        })
    })
}
