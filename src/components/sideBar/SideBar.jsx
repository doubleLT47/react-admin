import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@material-ui/icons"
import "./sideBar.css"

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="side-bar-wrapper">
                <div className="side-bar__menu">
                    <div className="side-bar--titles">Dashboard</div>
                    <div className="side-bar__list">
                        <div className="side-bar__list--item active">
                            <LineStyle className="side-bar__icon"/>
                            Home
                        </div>
                        <div className="side-bar__list--item">
                            <Timeline className="side-bar__icon"/>
                            Analytics
                        </div>
                        <div className="side-bar__list--item">
                            <TrendingUp className="side-bar__icon"/>
                            Sales
                        </div>
                    </div>
                </div>
                <div className="side-bar__menu">
                    <div className="side-bar--titles">Quick Menu</div>
                    <div className="side-bar__list">
                        <div className="side-bar__list--item">
                            <PermIdentity className="side-bar__icon"/>
                            Users
                        </div>
                        <div className="side-bar__list--item">
                            <Storefront className="side-bar__icon"/>
                            Products
                        </div>
                        <div className="side-bar__list--item">
                            <AttachMoney className="side-bar__icon"/>
                            Transactions
                        </div>
                        <div className="side-bar__list--item">
                            <BarChart  className="side-bar__icon"/>
                            Reports
                        </div>
                    </div>
                </div>
                <div className="side-bar__menu">
                    <div className="side-bar--titles">Notifications</div>
                    <div className="side-bar__list">
                        <div className="side-bar__list--item">
                            <MailOutline className="side-bar__icon"/>
                            Mails
                        </div>
                        <div className="side-bar__list--item">
                            <DynamicFeed className="side-bar__icon"/>
                            Feedback
                        </div>
                        <div className="side-bar__list--item">
                            <ChatBubbleOutline className="side-bar__icon"/>
                            Messages
                        </div>
                    </div>
                </div>
                <div className="side-bar__menu">
                    <div className="side-bar--titles">Staff</div>
                    <div className="side-bar__list">
                        <div className="side-bar__list--item">
                            <WorkOutline className="side-bar__icon"/>
                            Manage
                        </div>
                        <div className="side-bar__list--item">
                            <Timeline className="side-bar__icon"/>
                            Analytics
                        </div>
                        <div className="side-bar__list--item">
                            <Report className="side-bar__icon"/>
                            Reports
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
