import SideBarClient from "../components/SideBarClient";

const Events = () => {
  return (
    <div className="grid md:grid-flow-col lg:grid-flow-col ">
      <SideBarClient />
      <div className="pt-20 p-2 w-full md:col-span-12">
        <div className="rounded-xl border p-2 w-full flex flex-col items-center">
          <h1 className="text-4xl">About Us</h1>
          <p className="text-xl mt-2">THE MUSCLE FRIENDLY BISTRO!!</p>
          <p className="capitalize font-sans">
            ᴀᴛ ʙʀᴏᴛᴇɪɴ ʙɪꜱᴛʀᴏ, ᴡᴇ’ʀᴇ ᴏɴ ᴀ ᴍɪꜱꜱɪᴏɴ ᴛᴏ ᴍᴀᴋᴇ ʜᴇᴀʟᴛʜ ᴀɴᴅ ꜰɪᴛɴᴇꜱꜱ
            ᴀᴄᴄᴇꜱꜱɪʙʟᴇ, ᴇɴᴊᴏʏᴀʙʟᴇ, ᴀɴᴅ ᴅᴇʟɪᴄɪᴏᴜꜱ.
          </p>
          <div className="lg:p-20 md:p-20 sm:p-7 rounded-xl">
            <img className="rounded-lg" alt="event" src="/know.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
