import { KingdomLogo } from "../common/KingdomLogo";
import { kingdomRooms } from "@kings/core";

export function KingdomSidebar() {
  return (
    <aside className="flex w-72 flex-col border-r border-amber-700/20 bg-stone-950">
      <div className="border-b border-amber-700/20 p-8">
       <KingdomLogo />
      </div>

      <nav className="flex-1 p-4">
        {kingdomRooms.map((room) => (
          <button
            key={room.id}
            className="kingdom-hover mb-2 flex w-full items-center gap-4 rounded-xl border border-transparent px-5 py-4 text-left"
          >
            <span className="text-2xl">{room.icon}</span>

            <div>
              <div className="font-medium text-white">
                {room.title}
              </div>

              <div className="text-xs muted-text">
                {room.description}
              </div>
            </div>
          </button>
        ))}
      </nav>

      <div className="border-t border-amber-700/20 p-6">
        <p className="text-xs uppercase tracking-[0.3em] gold-text">
          Kingdom Status
        </p>

        <p className="mt-2 text-sm text-emerald-400">
          All systems operational
        </p>
      </div>
    </aside>
  );
}
