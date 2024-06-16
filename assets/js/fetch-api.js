import { getAjax, postAjax, jwtToken } from './api-ajax.js';//import các hàm getAjax và postAjax từ file api-ajax.js


export function getAllProduct(size, page) {
    console.log(jwtToken)
    page = 0;
    size = 10;
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
        jwtToken
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
export function getAddressByUserID() {
    return postAjax("user/address",
        {

        },
        jwtToken
    ).done(function (response) {
        return response;
    }).fail(function (jqXHR) {
        swal("Failed!", "warning");
    })
}

export function getProductByCategory(id) {
    console.log(id)
    return getAjax("product/category",
        {
            page: 0,
            size: 5,
            id: id
        },
        jwtToken
    ).done(function (response) {
        return response;
    }).fail(function (jqXHR) {
        swal("Failed!", "warning");
    })
}

export function getProductById(id) {
    return getAjax("product/" + id,
        {
        },
        jwtToken
    ).done(function (response) {
        return response;
    }).fail(function (response) {
        swal("Failed!", "warning", response.responseJSON.message);
    })
}
export function getProductSkusByProductId(id) {
    return getAjax("product-skus/product",
        {
            id: id
        },
        jwtToken
    ).done(function (response) {
        return response;
    }).fail(function (response) {
        swal("Failed!", "warning", response.responseJSON.message);
    })
}
export function getSizeByProductId(productId) {
    return getAjax("size/product",
        {
            id: productId,
        },
        jwtToken
    ).done(function (response) {
        return response;
    }).fail(function (response) {
        swal("Failed!", "warning", response.responseJSON.message);
    })
}
export function addProductToCart(productId, sizeId, quantity) {
    return getAjax("shopping-cart/add",
        {
            productId: productId,
            quantity: quantity,
            sizeId: sizeId
        },
        jwtToken
    ).done(function (response) {
        return response;
    }).fail(function (response) {
        console.log("Failed!", "warning", response.responseJSON.message);
    })
}
export function findProductBySearch(search) {
    return getAjax("product/search",
        {
            size: 10,
            page: 0,
            keyword: search
        },
        jwtToken
    ).done(function (response) {
        return response;
    }).fail(function (response) {
        swal("Failed!", "warning", response.responseJSON.message);
    })
}
export function getUserOrder() {
    return getAjax("shop-order/user",
        {
        },
        jwtToken
    ).done(function (response) {
        return response;
    }).fail(function (response) {
        swal("Failed!", "warning", response.responseJSON.message);
    })
}
export function getUserDetail() {
    return getAjax("user/detail",
        {
        },
        jwtToken
    ).done(function (response) {
        return response;
    }).fail(function (response) {
        swal("Failed!", "warning", response.responseJSON.message);
    })
}
export function updateUserDetail(fullname, username, email, phone, birthday, password) {
    console.log(fullname, username, email, phone, birthday, password);
    return postAjax("user/update",
        {
            fullname: fullname,
            username: username,
            email: email,
            phone: phone,
            birthday: birthday,
            password: password
        },
        jwtToken
    ).done(function (response) {
        return response;
    }).fail(function (response) {
        swal("Failed!", response.responseJSON.message, "warning");
    })
}
export function createShopOrder(paymentMethodId, shippingAddressId, note) {
    return postAjax("shop-order/add",
        {
            paymentMethodId: paymentMethodId,
            shippingAddressId: shippingAddressId,
            note: note
        },
        jwtToken
    ).done(function (response) {
        return response;
    }).fail(function (response) {
        console.log(response);
        swal("Failed!", response.responseJSON.message, "warning");
    })
}