class Ajax {
    static request(method, url, callback /* 성공했을때 돌려 줄 값 */, fallback /* 실패했을 때 돌려 줄 값 */) {
        let xhr = new XMLHttpRequest(); // xhr == ajax
        xhr.open(method, url);
        xhr.onreadystatechange = () => {
            if(xhr.readyState === XMLHttpRequest.DONE) {
                if(xhr.status >= 200 && xhr.status < 300) {
                    if(typeof(callback) === 'function') {
                        callback(xhr.status, xhr.responseText);
                    }
                } else {
                    if (typeof(callback) === 'function') {
                        fallback(xhr.status);
                    }
                }
            }
        };
        xhr.send();
    }
}

// Ajax.request('GET', 'http://~?~~?');
