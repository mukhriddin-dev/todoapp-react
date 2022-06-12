import React from 'react';

const Main = ({lang, langs}) => {
   const txt=lang();
   const texts=txt[langs]
   return (
      <div className="container main">
         <div className="card m-3 mx-auto" style={{width:"430px"}}>
            <img src="https://picsum.photos/400/320" alt="rasm" className="card-img"/>
            <div className="card-body">
               <h4 className="card-title">
                  {texts.cardtext}
               </h4>
               <p className="card-text">
                 this lorem text daa  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit eaque rerum quaerat accusantium. Veritatis, commodi sequi eos deleniti placeat ut ratione similique illum?
               </p>
            </div>
         </div>
      </div>
   );
};

export default Main;