import React from 'react';
import render from 'focus-core/application/render';
import Layout from 'focus-components/components/layout';
import DemoMenuLeft from '../../views/menu/menu-left';
import DemoFooter from '../../views/footer';
import DevTools from '../../components/dev-tools';
export default () => {
    console.info('|--- LAYOUT');

    const CustomLayout = (props) => {
      return <div><Layout MenuLeft={DemoMenuLeft} Footer={DemoFooter} /></div>
    }

    render(CustomLayout, `.${__ANCHOR_CLASS__}`);
}
