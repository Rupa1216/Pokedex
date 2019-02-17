import React from 'react';
import { Table } from 'reactstrap';
import './baseStats.css'

const BaseStats = props => {
    console.log(props.profileData)//an array of stats objects
    const stats = props.profileData;

    return <>
        <div>
            <h2>Base Stats</h2>
            <Table borderless>
                {stats.map((stat, index) => {
                    const base_stat = stat.base_stat
                    const stat_name = stat.stat.name
                    return <>

                        <thead>
                            <tr>
                                <tb>{stat_name}</tb>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><th>{base_stat}</th></tr>

                        </tbody>




                    </>
                })}

            </Table>
        </div>
    </>

}


export { BaseStats };