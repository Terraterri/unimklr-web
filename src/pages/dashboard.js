
import SideNav from "@/components/SidebarPro/SideNav";

export default function Contact() {
  return (
    <>
      <main className="main dashboard-main">
   <div className="py-120 px-30 dash_out">

<div className="row">
        <div className="col-md-3">
          <div className="user-profile-sidebar">
            <SideNav />
          </div>
        </div>
        <div className="col-md-9">
            <div className="user-profile-card">
            <div className="user-profile-wrapper">
            <div className="profile-det-titls mb-4">
                    <h3>Status</h3>
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-lg-3">
                      <div className="dashboard-widget dashboard-widget-color-1">
                        <div className="dashboard-widget-info">
                          <h1>30</h1>
                          <span>Recent Viewed</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-lg-3">
                      <div className="dashboard-widget dashboard-widget-color-2">
                        <div className="dashboard-widget-info">
                          <h1>100</h1>
                          <span>Shortlisted</span>
                        </div>
                      </div>
                    </div>
                  
                   
                    <div className="col-md-3 col-lg-3">
                      <div className="dashboard-widget dashboard-widget-color-3">
                        <div className="dashboard-widget-info">
                          <h1>60</h1>  
                          <span>Contacted</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 col-lg-3">
                      <div className="dashboard-widget dashboard-widget-color-4">
                        <div className="dashboard-widget-info">
                          <h1>20</h1>
                          <span>Airpropx</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
       
               </div>
           </div>
      </div>

      </div>
      </main>
    </>
  );
}
