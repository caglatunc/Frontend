interface ComponentOptions{
    template:string;
    selector?:string;
}

function Component(options: ComponentOptions){
return function (constructor:any ){
    constructor.prototype.template =options.template;
    constructor.prototype.selector = options.selector || "";
}
}

class Router{
    static navigate(component:any){
        const root = document.querySelector("app-root");
        if(root){
            const instance = new component();
            root.innerHTML = instance.template;
            if(typeof instance.ngOnInit === 'function'){
                instance.ngOnInit();
            }
        }
    }
}

window.addEventListener("load", ()=> {
    Router.navigate(HomeComponent);
})

@Component({ //decarator
    template: ` 
    <h1>Home Component</h1>
    <p>loremshshsh</p>
    <app-child></app-child>
    `
})
class HomeComponent{
    ngOnInit(){
        const childElement = document.querySelector("app-child");
        if(childElement){
            childElement.innerHTML = new ChildComponent().template;
        }
    }
}

@Component({
    template:"<p>I'm a child component</p>",
    selector:"app-child" //Bu işaretlenmiş ismi element olarak gösterebilrim
})
class ChildComponent{
    [x: string]: string;
}