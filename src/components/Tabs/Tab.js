import React from "react";
import { Tabs } from "@feuer/react-tabs";
import Dashboard from "../../containers/Dashboard/Dashboard"

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const DataTabs = () => (
    <div style={styles}>
        <Tabs activeTab={{ id: "overview" }}>
            <Tabs.Tab id="overview" title="Overview">
                <div style={{ padding: 10 }}>
                    <Dashboard />
                </div>
            </Tabs.Tab>

            <Tabs.Tab id="trade" title="Trade">
                <div style={{ padding: 10 }}>
                    This tab is for trading purposes
                </div>
            </Tabs.Tab>

            <Tabs.Tab id="research" title="Research">
                <div style={{ padding: 10 }}>
                    This tab is for research information
                </div>
            </Tabs.Tab>

        </Tabs>
    </div>
);

export default DataTabs;