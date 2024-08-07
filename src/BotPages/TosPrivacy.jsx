import React from "react";

const TosPrivacy = () => {
  return (
    <div className="ml-5 mt-5">
      <h1 className="text-2xl">Tellah's Library ToS and Privacy Policy information</h1>
      <br />
      <article id="ToS">
        <h3 className="text-xl">Terms of Service</h3>
        TERMS OF SERVICE AGREEMENT
        <br />
        This Terms of Service Agreement (the "Agreement") is entered into between Antidale ("Bot Owner") and the user ("User") of the Tellah's Library Discord bot (the "Bot").
        <br />
        By using the Bot, the User agrees to be bound by the terms of this Agreement. If the User does not agree to the terms of this Agreement, they should immediately discontinue use of the Bot.
        <br />
      <ol>
        <li>Use of the Bot: The Bot Owner grants the User a non-exclusive, non-transferable, limited license to use the Bot for personal or non-commercial purposes.</li>
        <li>Prohibited Use: The User may not use the Bot in any way that violates applicable laws, rules, or regulations or infringes upon the rights of any third party. The User may not use the Bot for any commercial purposes without the express written consent of the Bot Owner.</li>
        <li>Limitation of Liability: The Bot Owner shall not be liable for any damages arising out of the use or inability to use the Bot, including but not limited to, damages for loss of profits, loss of data, or other intangible losses.</li>
        <li>Modifications to the Bot: The Bot Owner may modify or discontinue the Bot at any time without notice. The User agrees that the Bot Owner shall not be liable to the User or any third party for any modification, suspension, or discontinuance of the Bot.</li>
        <li>Intellectual Property: The Bot and all intellectual property rights therein are and shall remain the property of the Bot Owner. The User agrees not to copy, modify, or distribute the Bot or any portion thereof without the express written consent of the Bot Owner.</li>
        <li>Indemnification: The User agrees to indemnify and hold harmless the Bot Owner, its affiliates, and their respective directors, officers, employees, and agents from any and all claims, damages, liabilities, costs, and expenses, including reasonable attorneys' fees, arising out of the User's use of the Bot.</li>
        <li>Termination: This Agreement may be terminated by either party at any time for any reason. Upon termination, the User must immediately cease all use of the Bot.</li>
        <li>Entire Agreement: This Agreement constitutes the entire agreement between the parties and supersedes all prior or contemporaneous agreements or representations, whether written or oral, relating to the Bot.</li>
      </ol>
      <br />
      By using the Bot, the User acknowledges that they have read this Agreement, understand it, and agree to be bound by its terms and conditions.
      </article>
      <br />
      <br />
      <article id="Privacy" className="text-xl">Privacy Policy</article>
      <p>TLDR: Tellah's library will never sell your data, or share it with anyone who is not administering a tournament that you have signed up for. Contact antidale on Discord if you would like any tournament entries removed.</p>
      <p>Tellah's Library only stores information about tournament entrants or command invocations that cause the bot to crash.</p>
    </div>
  )
  
}

export default TosPrivacy