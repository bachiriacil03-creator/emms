export function p_scroll() {
    document.getElementById("type_bar").style=" height: 0;"
    window.addEventListener("scroll",()=>{
        let scy=window.scrollY
        if (scy>50) {
            document.getElementById("contact_bar").style="opacity: 0; height: 0;padding: 0%;"
            document.documentElement.style.setProperty("--nic","var(--gray)")
            document.getElementById("logo").style="height:50px;"
            document.getElementById("nav_bar").style="background: var(--white);"
            if (window.innerWidth > 600) {
                
            }
            document.getElementById("type_bar").style="opacity: 1;"

        }
        if(scy > window.innerHeight*0.9){
            if (window.innerWidth > 600) {
                document.getElementById("type_bar").style="opacity: 0; "
            }
        }if (scy<50) {
            document.getElementById("nav_bar").style=""
            document.documentElement.style.setProperty("--nic","var(--white)")
            document.getElementById("contact_bar").style=""
            
            document.getElementById("logo").style=""
            if (window.innerWidth > 600) {
                document.getElementById("type_bar").style="opacity: 0; "
            }
        }
    })
}
export function brand_screen() {
    let ww=getComputedStyle( document.documentElement ).getPropertyValue('--sbd')
    
    let be=document.querySelectorAll('.b_element')
    let pe=document.querySelectorAll('.p_element')
    let n=0
    pe[n].classList.add("pes")
    be[n].classList.add("bes")
    function anime() {
        setTimeout(()=>{
            pe[n].classList.remove("pes")
            be[n].classList.remove("bes")
            pe[(n+1)%pe.length].classList.add("pes")
            be[(n+1)%pe.length].classList.add("bes")
            n=(n+1)%pe.length
        requestAnimationFrame(anime)
        },2000)
    }
    setTimeout(() => {
        anime()
    }, 2000);
    
}
export function brand_logo() {
    let nx =10

    let brd=document.querySelectorAll('.brands')
    let d=[]
    let dx=400
    brd.forEach((br,index) =>{
        d[index]=nx
        br.style.left= d[index] +"px"
        nx+=dx
    })

    function anime() {
        brd.forEach((br,index)=>{
            br.style.left= d[index] +"px"
            d[index]+=1
            if (d[index]>= window.innerWidth && d[(index + 1)%brd.length]>0 && d[index]>d[(index + 1)%brd.length] ) {
                d[index]=-dx
            }
        })
        requestAnimationFrame(anime)
    }
    anime()
}
export function product_card(id,img,name) {
    let e=document.createElement('div')
    e.ide=id
    e.name=name
    e.classList.add('product_card')
    e.innerHTML='<img loading="lazy" src="'+img+'" alt="'+id+'" class="card_img"> <div class="card_name">'+name+'</div> '
    return e
}

export function product_filter(page) {
function inject(list,id) {
    list.forEach((x)=>{
        document.getElementById(id).appendChild(x)        
    })
}
let cards=[]
let data = fetch('./product.json').then(r=>{return r.json() })
data.then((my_data)=>{
my_data.forEach((one,i)=>{
    let pc= product_card(one.id,one.src,one.name)
    cards.push( pc)  
})
let prev=cards.filter((x)=>{
    return x.ide.includes("a")
})

if (page) {
    inject(cards,"pp_container_2")
}else{
    inject(prev,"pp_container_1")     
}
})
}


export function search() {
    let items=document.querySelectorAll('.product_card')
    console.log(items);
    
    document.getElementById('search').addEventListener("keydown",(s)=>{
        let v=s.target.value.toLowerCase()
        let count=0
        items.forEach((x)=>{
            x.classList.toggle('hide',!x.ide.includes(v) && !x.name.includes(v) )
            if (!x.ide.includes(v) && !x.name.includes(v)) {
                count++
            }
            
        }) 
        if (count==items.length) {
                document.getElementById("nore").style.display='flex'
        }else{
                document.getElementById("nore").style.display=''
        }
        
          
        //document.getElementById("nor").classList.toggle("no",count==items.length)
    })

    /** ******************************************/
    let its=document.querySelectorAll('.type_element')
    let p=0
    its.forEach((t,i)=>{
        t.addEventListener("click",()=>{
            document.getElementById("nore").style.display=''
            its[p].classList.remove('type_active')
            let va=t.attributes.name.nodeValue
            t.classList.add('type_active')
            items.forEach((x)=>{
                x.classList.toggle('hide',!x.ide.includes(va) && !x.name.includes(va))
            }) 
            p=i
        })
        
    })



}




