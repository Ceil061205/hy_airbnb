import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: ${props => props.theme.text.primaryColor};
  font-size: 14px;
  font-weight: 600;
  
  .btns {
    display: flex;

    .btn {
      margin-right: 20px;
      cursor: pointer;

      &:hover{
        color: ${props => props.theme.color.secondaryColor};
      }
    }
  }

  .profile {
    position: relative;
    width: 50px;
    height: 25px;
    border-radius: 25px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    color: ${props => props.theme.text.primaryColor};

    ${props => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      top: 55px;
      width: 270px;
      height: 240px;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.18);
      color: #666;

      .top, .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
 }
`