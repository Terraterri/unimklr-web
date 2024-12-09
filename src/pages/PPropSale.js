import React from "react";
import SideNav from "@/components/SidebarPro/SideNav";
import { MdEdit } from "react-icons/md";
const PPropSale = () => {
  return (
    <>
      

      <main className="main">
   

   <div className="row">
           <div className="col-md-2">
             <SideNav />
           </div>
           <div className="col-md-10">
           <div className="dashbrd_cont">
           {" "}
      <div className="profile-det-titls">
        <h3>Post New Property</h3>
      </div>
      <div className="table_out">
        <table className="table table_nw propertyTable">
          <thead>
            <tr>
              <th>Builder Properties</th>
              <th>Exclusive Agents</th>
              <th>Agent Properties</th>
              <th>Owner Properties</th>
              {/* <th>Owner Properties</th>
                        <th>Owner Properties</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
               </div>
           </div>
         </div>
      </main>
      

    
    </>
  );
};

export default PPropSale;
