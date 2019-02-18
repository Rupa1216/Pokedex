import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './baseStats.css'

const BaseStats = props => {
    console.log(props.profileData)//an array of stats objects
    const stats = props.profileData;

    return <>
        <div>
            <Container fluid>
                <h2>Base Stats</h2>
                <div className="stat">
                    <Row form>
                        {stats.map((stat, index) => {
                            const stat_name_lc = stat.stat.name;//lowered case state name
                            const upperCase = stat_name_lc[0].toUpperCase();
                            const lowerCase = stat_name_lc.slice(1);
                            const stat_name = upperCase.concat('', lowerCase);
                            const base_stat = stat.base_stat;
                            return <>
                                <Col md="auto" key={index}>
                                    <div className="content stat-name" >
                                        {stat_name}
                                    </div>
                                    <div className="content stat_base" >
                                        {base_stat}
                                    </div>
                                </Col>
                            </>
                        })}
                    </Row>
                </div>
            </Container>

        </div>
    </>

}


export { BaseStats };