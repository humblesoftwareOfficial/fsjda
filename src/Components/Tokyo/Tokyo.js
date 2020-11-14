import React, {Component} from 'react'
import Header from '../Utils/Header'
import Footer from '../Utils/Footer'
import Partenaires from '../Partenaires/Partenaires'
import SocialNetworks from '../Home/SocialNetworks'
import {Layout} from 'antd'
import tokyo from '../../assets/tokyo.png'
import Utils from '../../Utils/detectDevice'
import { Table, Input, Button, Icon, Tag, Affix } from 'antd';
import Ranking from './rannking.json'
const footer = () => <div><a href="https://judobase.ijf.org/#/country/profile/78/competitors" target="blank">Source: https://judobase.ijf.org/</a></div>;
export default class Tokyo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: '',
            ranking: [],
            searchText: '',
            searchedColumn: '',
            top: 50
        }
    }
    componentDidMount() {
      window.scrollTo(0,0)
        this.setState({
            device: Utils.DetectDevice(),
            ranking: Ranking
        })
    }
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Rechercher par ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }} type="danger">
              Annuler
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: text =>
          this.state.searchedColumn === dataIndex ? (
            <b>
                {text.toString()}
            </b>
          ) : (
            text
          ),
      });
    
    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
    };
    
    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    render() {
        const columns = [
            {
              title: '#',
              dataIndex: 'id',
              key: 'id',
              render: text => <p>{text}</p>,
            },
            {
              title: 'Nom & Prénom',
              dataIndex: 'nom',
              key: 'nom',
              ...this.getColumnSearchProps('nom'),
            },
            {
              title: 'WRL pts',
              key: 'points',
              dataIndex: 'points',
              render: tags => (
                <span>
                  {tags.map((tag, key) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <div key={key}>
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                        <br/>
                        {" "}
                      </div>
                    );
                  })}
                </span>
              ),
            },
            {
              title: 'Rang',
              key: 'place',
              dataIndex: 'place',
              render: tags => (
                <span>
                  {tags.map((tag, key) => {
                    let color =  'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <div key={key}>
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase() + '. place'}
                        </Tag>
                        <br/>
                        {" "}
                      </div>
                    );
                  })}
                </span>
              ),
            }
        ];
        const columnsMobile = [
            
            {
              title: 'Nom & Prénom',
              dataIndex: 'nom',
              key: 'nom',
              ...this.getColumnSearchProps('nom'),
            },
            {
              title: 'WRL pts',
              key: 'points',
              dataIndex: 'points',
              render: tags => (
                <span>
                  {tags.map((tag, key) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <div key={key}>
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                        <br/>
                        {" "}
                      </div>
                    );
                  })}
                </span>
              ),
            },
            {
              title: 'Rang',
              key: 'place',
              dataIndex: 'place',
              render: tags => (
                <span>
                  {tags.map((tag, key) => {
                    let color =  'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <div key={key}>
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase() + '. place'}
                        </Tag>
                        <br/>
                        {" "}
                      </div>
                    );
                  })}
                </span>
              ),
            }
        ];
        return(
            <Layout style={{backgroundColor: '#FFF'}}>
                <Header fixed={false} active="tokyo"/>
                <div>
                    <img src={tokyo} alt="tokyo2O2O" className="imgFond"/>
                </div>
                <div className="barre">
                    <div className="row">
                        <div className="col">
                            <br />
                            <ul className="social-icons">
                                    <li><a className="facebook" href="https://www.facebook.com/tokyo2020.jp" target="blank"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="twitter" href="https://www.facebook.com/tokyo2020.jp" target="blank"><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="youtube" href="https://www.youtube.com/tokyo2020" target="blank"><i className="fa fa-youtube"></i></a></li>
                                </ul>
                        </div>
                        
                    </div>
                </div>
                {
                    this.state.device === "MOBILE" ? 
                    (
                     
                        <div className="">
                        <Affix offsetTop={this.state.top}>
                                        <div className="enteteContent">
                                            <small className="entete">ROAD TO TOKYO</small>
                                        </div>
                                    </Affix>
                        <h2>En route pour les JO-TOKYO 2021</h2>
                         <hr/>
                            <div className="">
                                <Table columns={columnsMobile} dataSource={this.state.ranking} bordered={true} pagination={false} rowKey='nom' size="small" footer={footer}/>
                            </div>
                        </div>
                    ):
                    (
                        <div className="contentPrésentation">
                        <h1>En route pour les JO-TOKYO 2021</h1>
                        <hr/>
                            <div className="">
                                <Table columns={columns} dataSource={this.state.ranking} bordered={true} pagination={false} rowKey='id' footer={footer}/>
                            </div>
                        </div>
                    )
                }
                <SocialNetworks/>
                <Partenaires/>
                <Footer/>
            </Layout>
        )
    }
}