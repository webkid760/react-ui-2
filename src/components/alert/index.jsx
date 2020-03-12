import React,{useState} from 'react';

import PropTypes from 'prop-types'


function Alert(props) {

  // let defaults = {
  // 	description:"123456",
  // 	title:"i am alert",
  // 	closeText:"壮",
  // 	closable:true
  // }
  // props = Object.assign({},defaults,props);
  
  let {style,showIcon,description,closeText,type,title,closable} = props;

  

  const [visible,setVisible]=useState(true)

  const close = function(){
  	setVisible(false);
  }
  return (
        <div style={{"display":visible?"block":"none"}}>
          <div style={style} className={`el-alert ${type?"el-alert--"+type:"el-icon-information"}`}>
            {
              showIcon && <i className={`el-alert__icon ${description?"is-big":null}`} />
            }
            <div className="el-alert__content">
              {
                title && (
                  <span className={`el-alert__title ${description? "is-bold":null}`}>{title}</span>
                )
              }
              {
                description && <p className="el-alert__description">{description}</p>
              }
              <div style={{"display":closable?"block":"none"}}>
              <i className={`el-alert__closebtn ${closeText ? 'is-customed' : 'el-icon-close'}`} onClick={close}>{closeText}</i>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Alert;


Alert.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string,
  closable: PropTypes.bool,
  closeText: PropTypes.string,
  showIcon: PropTypes.bool
}

Alert.defaultProps = {
  	description:"7777",
  	title:"i am alert",
  	closeText:"壮",
  	closable:true
};
