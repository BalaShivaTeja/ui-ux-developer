*{
margin:0;
padding:0;
box-sizing:border-box;
scroll-behavior:smooth;
}

body{
font-family:'Inter',sans-serif;
background:#050505;
color:white;
overflow-x:hidden;
}

.hero{
min-height:100vh;
padding:40px 10%;
display:flex;
flex-direction:column;
justify-content:center;
background:
radial-gradient(circle at top right,#4f46e5 0%,transparent 35%),
radial-gradient(circle at bottom left,#00d4ff 0%,transparent 30%);
}

nav{
display:flex;
justify-content:space-between;
align-items:center;
position:fixed;
top:0;
left:0;
width:100%;
padding:20px 10%;
backdrop-filter:blur(20px);
z-index:1000;
}

.logo{
font-weight:800;
font-size:1.5rem;
}

.nav-links{
display:flex;
gap:30px;
}

.nav-links a{
color:white;
text-decoration:none;
}

.hero-content{
max-width:800px;
}

.tag{
color:#00d4ff;
margin-bottom:15px;
}

h1{
font-size:5rem;
line-height:1;
margin-bottom:20px;
}

h1 span{
display:block;
background:linear-gradient(90deg,#00d4ff,#7c3aed);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

.subtitle{
font-size:1.2rem;
max-width:650px;
color:#c5c5c5;
line-height:1.7;
}

.hero-buttons{
display:flex;
gap:20px;
margin-top:40px;
}

.btn{
padding:14px 26px;
border-radius:12px;
text-decoration:none;
font-weight:600;
transition:.3s;
}

.primary{
background:linear-gradient(90deg,#4f46e5,#00d4ff);
color:white;
}

.secondary{
border:1px solid #444;
color:white;
}

.btn:hover{
transform:translateY(-4px);
}

.section{
padding:120px 10%;
}

.section h2{
font-size:3rem;
margin-bottom:40px;
}

.timeline{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:25px;
}

.card{
padding:30px;
background:rgba(255,255,255,.05);
backdrop-filter:blur(20px);
border:1px solid rgba(255,255,255,.1);
border-radius:20px;
transition:.4s;
}

.card:hover{
transform:translateY(-8px);
}

.card h3{
margin-bottom:10px;
}

.card span{
color:#00d4ff;
}

.skills{
display:flex;
flex-wrap:wrap;
gap:15px;
}

.skills span{
padding:12px 18px;
background:#111;
border-radius:50px;
border:1px solid #333;
}

footer{
text-align:center;
padding:40px;
border-top:1px solid #222;
}
