function request({method,uri,onerror,onload,headers,body}){
    let xhr = new XMLHttpRequest();
    xhr.responseType="json";
    xhr.open(method,uri);
    xhr.send(JSON.stringify(body));
    xhr.onerror=onerror
    ? onerror : () => console.log("cannot send request!!!");
    xhr.onload = () => {
        if(xhr.status>=200&& xhr.status<300) onload(xhr.response);
        else console.log("error",xhr.response);
    };
}
request({
    method:"GET",
    uri:"https://jsonplaceholder.typicode.com/posts",
    onload:(data)=>{
        let list=data.map(({Id,title,body})
        => )
    }
})