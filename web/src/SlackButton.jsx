var SlackButton = () => {
  return (
    <a href="https://slack.com/oauth/authorize?scope=incoming-webhook,commands&client_id=3358490050.67017692769" >
      <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
    </a>
  )
}
module.exports = SlackButton;
