import React from 'react';

const blogStyle = {
    width: '30%',
    height: 'auto',
    margin: '0',
    float: 'left'
};

const Aside = ({ Routers }) => {
    return (
        <div class="container">
            <aside class="blog" style={blogStyle} >
    <h2>Blog</h2>
    <div class="post">
        <h3>Titulo del Post 1</h3>
        <p>Contenido del Post 1...</p>
    </div>
    <div class="post">
        <h3>Titulo del Post 2</h3>
        <p>Contenido del Post 2...</p>
    </div>
    {/* <!-- Agrega más posts según sea necesario --> */}
</aside>

        </div>         
    );
};

export default Aside;