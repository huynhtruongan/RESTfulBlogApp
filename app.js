const   bodyParser      = require('body-parser'),
        methodOverride  = require('method-override'),
        expressSanitizer= require('express-sanitizer'),
        mongoose        = require('mongoose'),
        express         = require('express'),
        app             = express();
    //  APP CONFIG
mongoose.connect('mongodb://localhost/RESTful_Blog_App', {useNewUrlParser: true})
app.set('view engine', 'ejs')
mongoose.set('useFindAndModify', false)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressSanitizer())
app.use(methodOverride('_method'))
    // MONGOOSE/MODEL CONFIG
let blogSchema = new mongoose.Schema({
    title : String,
    image : String,
    body : String,
    created : {type: Date, default : Date.now}
})
const Blog = mongoose.model('Blog', blogSchema);
// Blog.create({
//     title: 'Test Blog',
//     image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBMSExIWFhURFRgZFhcWGBgXGBgaGBgYFxUYGBgaHSggGBonGxcVITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGyslICUxLysvKy0tLS0tNzU1LS0rLy8tKy0rLy0tNS0tLS0tLy0tKy0tLS0vLS0tKy0tLS0tLf/AABEIAKYBMAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EAEgQAAIBAgMFBQQECQsEAwAAAAECAAMRBBIhBQYTMVEUQVJxkSIyYYGhsbLBByMkNGJyc4LRFTNCQ1OSorPC0vBjdIPhFjVF/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EADIRAAICAQIDBQUJAQEAAAAAAAABAhEDBCESMUETIlFxwTI0obHRBSQzQmKBgpGSYRT/2gAMAwEAAhEDEQA/ALSIidGEREQBERAEREAREQBERAEREAREQBERAES52LsTijO5ITuA5t/AS6bYOHItkt8QzX+uTQMZEsNsbLNBhrdG5Hv8j8ZXyAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAnyfYgG5C/iFCC/sKBbpYSNRV81hcHv/APcg7C20qqKdQ2y+63dboennLo4uit24ia8/aErni45J2a8Gq7ODjSdkPeFfyVs3MZfW4H3mY+W+3trCrZE9xTe/LMfLpKiWGRu3YiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJ6PujzP3Sq2/tqnhKYdwWLGyqLXJ5nnyA6zLr+ENr64YZfhU1+zItHcccpK0jdxIWyNpJiKS1UvZrix5gjQgybBw1WwiIkgREQBERAEREAREQBERAEREAREQBERAERPdE+0IIPIQ9DPrUyNSJW1q73ILtoSOckbOa4ceRkE0SIkDa+16WGQPVa1zZQBdmPwH38pl8V+EJbfi6DE9XYAei3v6xaO445S5I28SBsPGmvh0qkWLDpa9tCQLmwJBsL8rSfBw1ToTnUqWtpznScMRzX/nSSDpdvA0XbwNLKIIsrbt4Gi7eBpZRAsrA7H+gdJ9u3gaS8Nzf9c/UJ3gWZPHbGoYvFMmKZqa08MGVswTKzVct9RY8gNRIdb8F1POqrjwM4uqtTBdh1FnFx8bWn6HhMrAoyg3Gt+8X5GS1QEgnVkuL21F7E287D0mHLkkps93SY4Twp8z872Ds0YKpisOGLrTqpZiLatSRuXXX6JfCTN4qgNhbk3P5SGvKasbbirPK1KissuE+xKztj9R6CO2P1HoJ2UUWcSs7Y/Uegjtj9R6CBRZxKztj9R6CO2P1HoIFFnErO2P1HoI7Y/UeggUWcSs7Y/Uegjtj9R6CBRZxKztj9R6CO2P1HoIFFnErO2P1HoI7Y/UeggUWcSs7Y/Uegjtj9R6CBRZwBE90feEkg+GmehnwCxErDXa5IYjXqZNwNVmV7km1rX+d5BNETHLao3n9es67MPtkdVP8ZMcqTcopPU6z6KhHIAeQECzK7y7v1MdiqNFKiplo1HGe9tHpq3IfpL6Tns38GSAcSvi1amDyoKWLa2sG19ApM3OyeHxBdBnswV9LgGxZfgDlHnYS9p7OBpm2TIM2ZSRrfndTzvMmaclKkezo4Y5Yk2YTZGCWga9BFYU6VY8PNf3HRKgsW1OrNLGTtsVb1Mvco+k8/ukGacbbirPM1CSyyS8ROGI5r/zpO84Yjmv/ADpOylFtERBwIiIBww3N/wBc/UJ3nDDc3/XP1CWGzsIatQL3c2PQDn/D5wTVuiRgNk1XAcEKO4nv+QnPtXsEs4Vl0K/0lbwkeL4Aa6Wmspkcl/o6eVgNPQiDSXNmyjMORsL+sqyY1M9HTy7JNLr/ANMZtbYdbgipYGwzMt/aGlz5kfdKleU/RRUyr+MNrsV1t/SYhBp1BUfOYrbeA4NUqPdbVPLp8uXpLDLkhXIy1NCxCqCSTYAakk8gB3melosSQFJKglgAdAvvE9AO+Td3vzvD/tqf2hLbBbPrJUxrvSqKpw+KszIwXUG2pFoOUrM/SwlRwWWm7KvMqrEDzIFhOfDOUNY5SSAbaXFiRfrYj1l5tLEPSbBBGZQtCk4AJAzMzMxt1J5zvtXDZu00UFsmOXKOnFDp6XVYJ4TOpSYnKFJPQA35X5eWs6YXBVat+HTd8tr5FLWvyvYacjNPtNlOJqYhRZRha1vNS+FH+n1mf2GxGJoWJF61Pl+uIDVM41sBVQqr0nUv7oZWBbyBGvdynOvh3Q2dGQ9GUqfQy+w1RhWx7gnNTp1spvquaqqkg9xsSNOsiu5fZ92JY08SApJuQGpksBfuuoNoFFXh6D1GyorMx7lBY+gnTsNXPw+E+fwZWzf3bXms/B24K4lEYLWdBwyfgGFx1sxBPmJN2dtF6u0qCVaRSrQpOrkkHOcoN9AABe5Fr+9BKiqRhsTgatMXqUnQHvZWUepE+0Nn1nXOlKoyj+kqMR6gT9ExhrHD7S7T/NjPwc2XlZstrfHJa/fO9bFPRq7Oo0zlp1FcMthqFprl8tSTpBPAj8zw2ArVBenSdwDa6qzC/S4HOecThalMgVEZCRcBlKkjrrP0LZeLdNrV8OptSYmoVsPfNOmSb2vzMxu9GPqVcTVFRr8KpURNALKHaw0GvzghxSRWJSYhmCkhbZiASBc2Fz3azxNLu8v5NVTvxbOg/wDFRaov+NlmaEHLRdz1TNrnoCfonmfVa0krKSrUCi5+idMNtZFUgq1yb938ZP2hTD03GVb20IGtxqJl5fhxxktzLqM04S25F5/LSeFvQfxj+WqfeGAHfYH6jKFC3eLfO89GXdhAo/8ATkT3Fbfex9ijp3ZnsfoBt6z9A2vtThbPOLViV4aMhsPbL5Qgv3asL87WM/GNoAcapZQoLsQo5AE3AHwAIlzjN5WqbLw+A1/E16jk9UtemP7z1NO7IswTxKTV9D6LDNQi+Hqi72LvUK9ThumRm905rgnobjQzRT8koqxIyg5uYtz0F7i3lN/sPby1MOz1CA1EfjPLuYef1zoy5cdbo0uEwRqBrG1hof0u6QcYtnAvex5+ky+w9/nR6oquFpPcqOGWZDoAFZfgNc1x0tJlbe7COwJrEm+pKVPh+jK0pcW/IslCHZpJPi6s2E+TCrv2BVxRYhqSAcAKuUsSQpuW177m/QyR+DhQmBao59+uzX15gKv1qfWWT7kHJ9CmGCUpKPVtL+zYBxmK94F/We5CwNYO9Qg31HyGoE7YzEimhc8h3DvJ0AnON8S2OdRjeGTjLaqv+rGG5v8Arn6hNRu5kCGzDiMTcd9hysO8d8/NV3oClvZXUk+9y+HKaPdPb2aoKoFsjANY3BVtD9/oJbLHJK2VY80eJfRmvwjcG9NmzEvcty52v11lowHcbg6g9QeU718DTqalRc940PqOc4bWqCmikW6AfCZ7cbcuR6qhGSjGC3K7bmDatRNNDYsyanuswJP0Sq3rrpkSmTmqLY36aak9L9JN2rtJ0wj1VFmFgD3akC49ZjCxOpNydSTzJncXatGXN3G4vmRN3vzvD/tqf2hJ+zGPGxup/N8V9RlXsfAmvXp0lbKXJsx7rAt3eUttp7rVKNOpUWtTqCkbVAhOZb2vcfPWSVq6PuLwNSucG9JGdeDSQsoJVWRiHDnkttDr3GTNmYtGxuMa909qsp7jwKq1FI8wD6ytpbu1DgmxYcBbElNbkBspPTqZ32Xuo9aglYV6aCqSqhri5zFct+8mx0g6V+ByoVQdm1CT7QqcP5O1Ot9dN/WVuxfzmh+2p/bWfNqYCph6rUanvLbkbg3FwR10MvcNuZUenScV6QasoZFa4J0zWHUj4CDmm2R8IM2Ix1Me9VSsEHezCqGyjqbK2nwnHE0WpYHh1FZHqYjOqsCrZVplS2U6gXNp12ZuvUq8fPUWkcO1nz8ha5Jv005zntDYBSjVriulVaTqhK3N7hTcG/6YEE06O+6Wy1r8YpUZMRSXNRswUE2Op0ubGwPd7U2lcjt2CzZeNwqnEy9Mo+jNmt85kqW51XtHBFZQ60hUvZhYFitvPQzlht2mq1zTp4qm5FPOXUlh72XKSDe8HStLkQt6MXVbE10ao7KtV8qlmKizG1lJsJvuynEPs/EUypp0lcsb6jMigC3W4II7p+ebD2PUxdQopAyjM7tyA+8/+5Pxm7tWkaISur0sU4RXQnLdjYZgDrp8TyMERb50XmycQtTbdZlNwVYAjkcqop+kGY/bn51iP29X/MaXeL3Nq01qFK9N3pLdkUkOBa/Ly62vOWJ3VyUVqviaS56edVbRm9nNYXOp1A+cBpvodsJjKdAYBXpFmA4uYPlC8WoRquU5vZVe8TPbRw/DrVKf9m7L6EgTQJuc7JRPaKQaugNNHuCfZDWHO9gRyEzuMoPTqOjizoxDd+o+PfBzK+paxECG6KxMli8LXDsEphlubG4GndzM1pQDQAAfCcayCxNpS9Tkjj7TFVVbu/Qtw4cOWajlT3pKjJ8DE/2P+Jf906rs/GEXFDn+kn+6aeigI5TS4mhTGBw9RVAZiVYjvy5h90rlrtVHF2vdqr6/U0w0GilmeKpXy6H5c+61ao2Z0Kk2uAyW6a6mdd4Ny8hpnCZqmYHiBmQZSMuXKTlJBu3XlKzebb2Lp43E00rMqpWcKoC6AHQDTpIK7xY3vxL+i/7ZMnq5tPufEvxw0+NOPefnW3kXGxN28VTxFJ3pWVWuTnQ20I5Bpx2vuvimrVDRolabHQGpTF9bnTN7txcA/CRcPt7GO601rsWcgAezzPym02bg6661sS9Q+EWVR6C5+jykfe/0fEiUtLF2+L4GQpbo4gLY4Ys3i41MD4AKP4zkNzsX/Y/46f8Aun6RxD1nh2Y8mtH3r9HxOO20vhP4H57sjcau9VlxCNSpkGzq9NtQdAVuSQfum5obLNLCJh1Y1OHoC1gbZiQOmg0+U6U6rm/tHSdaWe4u99ekpWfU5sTn3a38fqaPu+DURXetNPpX1PGyMMyZswte1tQeV+k57zP+JA8Tj6iZKxOa+jW0lJt0n2AWJvc/V/Gafs55JcLlVdKuzF9t5Mc5zkr4uT8Oi2KZaSjuHpNBuoADUA/RP2pRSy2HfMwBI9nu8562Vdxnz+CTeRWz9l3axJfDrfmns/Icvot6SZiijDKwzT8e2lvVi8EiLSZCrlic6ljfT48p0G921ODxs2Gy5M9sjXta/XnMXZ2j3I5kkjdb3D8jfzT7azGryEhbN3rxeNSpTqmnkGX3UIN73Hfy0k0SGqdFWSSk7G5f5/h/1m+w01m1EQ0dpDDk8S964flYAk5LfANz+PwmH2FjxQxFOsQWFMkkDmbqV7/OX20N66Jp11o4dkbFfzrs1yQRY2FzrYnoBeQdxaSNNhMK3Y6eGymz4NyTbQOwWwvyvdmNvhKXC/8A1WD/AO6T/NecW33/ACpagVxRWnlNK41a59rp0HynLAbz4dKCUXw7uKVQ1E9oAA52dOR7rj4SDriRw/CL+e/+NPraaJf/AMfyP+SJhtu7UbE12rEZb2AW97ACwF+/r85osLvdQWnhw2Hd6mFQBDmAF8oVj8x1BknKatl3QyZtq8S+S4z5fey8L2rfG15Ubr0qdanjMPTzcMvSZA3vWza3+PsiQdm70IBiuPSZ+1tdghAsCCLX58ja857F2/Rw2KerTpOKTplCZrsDdTe5PUH1gniWxrNnV8+1cX0Sii+mUn6SZU7j8Dtlbs+fh8DTiWzXzLflKrY28q0cViK7ozCvmsARcXa4vf4aTpsnb+Fw1c1KVCoEallKlsxzZgb3J5WEgcSJX4O+WM/Zr/rkzD/mGzP+6pfaeU2z94aGHrFqFBhSqJlqIz3JNyQwOvcbW+MY3eZCcMlKiUo4Worhc12OU9T5tzJ5yQmkjQ7d2rhsLiMS4LtiKtNVyW9geyMpvbyJ1Mh738DseF4mficD8Vltlvlp3z/RMvvFtIYnEPWVSoYLobX0UDu8pbbQ3gwtehTp1KFQvRp5UYNYA5QL2B1F1EDiuzW4XBU6g2eWZg9KjnRRyayUw1z8LrpPzfbWLNbEVahXLnc6HmLaAH42Evl3tUPg2FNvyVCr6j2roq6fNb6zPbVxC1K9SoilVqMWANri+p5fG8ETaa2LGFqhWUnuIPprE44ju84KSXjsetQg6Cw+Mh1agIOs++x8PonipltpaU5rWGVu9n8i/TKssPNfM94dha3fLtMUDhFp39pKpNv0SvP1vKDD8/l98n4fmZly+5fxXobMO2u/d+pUb4/g+r1sW1fDmhw6yoxzVQhD5QHDA9SL6aa90ok/BhtJzZDhiei1wT9CzVYzDJUVkdQVa4IkzcrdzCYOtRxYLK2epTJYgqAU0vp175vi+6jP2tyaKvdD8EWKStxcU9JMmqKhaoS3iPugAfO9+62ul25u++GVXLh1Y2uBYg2JGlzpoZtv5aw39vT/ALwlBvltOjUooiVFc5wfZN7AKw1t5iSc5FFqzIRPk6PRZQGKkBtQSDY+RkmYiYbmZ8xGPSkRmvfnYdJ9w3Myh3rV8ylQdQBcX7s2mnymX7OhGeFRly3+bNf2lKUdRcOe3yRb1Nt0yeT+g/jKraOL4jAgWAFhfn8ZQB6o8fzB+8S/2bsGriEo/jjSZzY3QNzYhWtoRpaejihiwRSj0PO1EM+aTc2tyJLHYhs5Pdltf43FvvkjCbvGjVfiVeLlLKAVCrobXtc3On0yfVUAqLADXyk5M6apIqx6VxnbZn98nBWlY97fUJMSoP5PtfXs5+wZC3wtlpWtzbl5CTEy9g7r8A/ZMr/KjXRD3K/rf3P9U1Ey25XOr+7981MjJ7QKSJbdnTwiOzp4RKybKmJbdnTwiOzp4RAsqYlt2dPCI7OnhECypiW3Z08Ijs6eEQLKmJbdnTwiOzp4RAsqYlt2dPCI7OnhECypiW3Z08Ijs6eEQLKmJbdnTwiOzp4RAs6zjiBy852nHEDl5wQhwBPNSkALz5wPjPj0bC95TqPwpeT+Ro0/4sPNfMYca/L75Ow/MyDhx7Xy++T8PzMy5fcv4r0NeL3/APk/U5tzPnLCop7Gmn9ax+WUC/rIIpMxOVSbHuBMuqtJuxquU300sb+8e6b4+yjDVyl+5RRPT02XmCPMETzOiorsLvNVoVqyrTwjWIAOIqJTNrX9kPUW/PUidNsb54qsiqy4Kwdf5rEU6j6+z7iVma2uuk5YJH7ZXCGp7SU2Ip8c35rc8Eg91tes+7fqMWw9NuL7VZT+MOJtZbk2FZipPlrLko+BavZJOH5mSqfMSLhuZkmnzE8nTe6/69TZqvfP8+h7rnX5Tps3+epfrr9YnOvz+Un7sH8rpfvfYaXaP8CPkU6v3mXmRNo/z1X9o/2jINcXKjzlxvMfyur+79lZTV1uVHnNJlftGe3wpgLSt1b6hJiUh2C//QP2TIW99Oy0te9vqElpS/IL3/qD9ky38qBE3K51f3fvmpmW3K51f3fvmpkZPaIERE4AiIgCIiAIiIAiIgCIiAIiIAiIgCRcRVGljyMlTnwV8I9JAInHPWcsXjciFjmYC2ii5NyBoPnLDgr4R6RwV8I9JEoqUXF9TuE+GSkum5A2bjVdQ9mUG+jix0NtRO+L2xToAMVd8xtamuYjvubkaSRwV8I9I4K+EekreGLx9m+XIsjnlHL2q53ZTf8AyLEdpFFadqDspzWYNYrzLA5Ra/K3dLvtv6Z9TPPBXwj0jgr4R6S1bFUpWU+C2/iKmINKrTApJnytZr8xa7E2a/wAmz2X2M4ao1SooqC/MkEc8uUDVvjzlJwV8I9I4K+EekkcSu6M/ttL11qCnxBkAPso4uGJFw6kcvhPVIq2IolaJpqhYsTToJe6kLrRprfXreX3BXwj0jgr4R6TvjdURe1ETdzaNGtWyuHpoCMzOMotryOv/DL/AG3Sw9Gm9anVzoh0ClWLW5hbEXP3Sr4K+EekcFfCPSZ4YYwhwLkXT1DnPja32+BXYneFDQeutN/Y0yOMrHUC/f7Ot7/Ayx2ZvjVxKtVzNSu5sgYkAcxlNhca25d0cFfCPSOCvhHpOscFCKiuSOcmVzk5Pmz5tTfKrhlWrdq3tgFCxCkWJOY2Nhpbl3iU2J28owy4go2v9BdSLm2l7ad9+kuuCvhHpHBXwj0nZxxeJ+dbZ29VxDAJSIVASLgluXtE20tYSQ+8j9mFFabZsmViR7NrWNgNfWb3hL0EcJegk2dccfAym5FVgawqDKRk5gjxTWo4PI3nngr4R6T0qgchaQ3Zw2meoiIIEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQD/9k=',
//     body: 'hello this is a blog post'
// },(err, blog) =>{
//     if(err) console.log(err);
//     else console.log(blog);  
// })
    // RESTFUL ROUTES
    // INDEX ROUTE
app.get('/blogs', (req, res) => {
    Blog.find({},(err, allBlog)=> {
        if(err) console.log(err)
        else res.render('index', {blog: allBlog})       
    })
})
    // NEW ROUTE
app.get('/blogs/new', (req, res) =>{
    res.render('new')
})
    // CREATE ROUTE
app.post('/blogs', (req, res)=>{
    // create blog
    console.log(req.body);
    
    req.body.blog.body = req.sanitize(req.body.blog.body)
    console.log('==============');
    console.log(req.body);
    
    
    Blog.create(req.body.blog, (err, newBlog)=>{
        if(err){
            res.render('new')
        } else {
            // redirect to the index
            res.redirect('/blogs')
        }
    })
    // redirect
})
    // SHOW ROUTE
app.get('/blogs/:id', (req, res)=>{
    Blog.findById(req.params.id, (err, foundBlog)=>{
        if(err) res.redirect('/blogs')
        else res.render('show', {blog: foundBlog})
    })
})
    // EDIT ROUTE
app.get('/blogs/:id/edit', (req, res)=>{
    Blog.findById(req.params.id, (err, foundBlog)=>{
        if(err) res.redirect('/blogs')
        else res.render('edit', {blog: foundBlog})
    })
})
    // UPDATE ROUTE
app.put('/blogs/:id', (req, res)=>{
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updateBlog)=>{
        if(err) res.redirect('/blogs')
        else res.redirect('/blogs/'+ req.params.id)
    })
})
app.delete('/blogs/:id', (req, res)=>{
    //destroy blog
    Blog.findByIdAndRemove(req.params.id, (err)=>{
        if(err) res.redirect('/blogs')
        else res.redirect('blogs')
    })
    //redirect
})
app.listen(3000, ()=> console.log('server is running'))
