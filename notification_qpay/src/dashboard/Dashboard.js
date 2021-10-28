import React from 'react'
import { Card, Heading, DashboardName } from './Card'
import Sdata from './Sdata'



const Dashboard = () =>{

    return(
            <>
                <div className="container-fluid">
                    <div className="row">
                        <Heading />
                    </div>

                    <div className="row">
                        <DashboardName />
                    </div>

                    <div className="row text-center mt-5">
                      {Sdata.map((val , index)=>{
                          return(
                          <>
                            <Card 
                                key={val.id}
                                sname={val.sname} 
                                iconstyle={val.iconstyle} 
                                stylebackground={val.stylebackground} 
                                links={val.links}
                            />    
                        </>
)


                      })} 
                    </div>
                </div>
            </>

        )

    }


export default Dashboard