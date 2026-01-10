import { Star, Trash2, Archive, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  id: string
  from: string
  subject: string
  preview: string
  date: string
  read: boolean
  starred: boolean
  provider: "google" | "apple"
}

const messages: Message[] = [
  {
    id: "1",
    from: "Zeus Olympus",
    subject: "Regarding the Trident Project",
    preview: "I wanted to discuss the latest developments on the Trident Project. We need to...",
    date: "10:30 AM",
    read: false,
    starred: true,
    provider: "google",
  },
  {
    id: "2",
    from: "Athena Wisdom",
    subject: "Strategy Meeting Notes",
    preview: "Attached are the notes from our strategy meeting yesterday. Please review and...",
    date: "Yesterday",
    read: true,
    starred: false,
    provider: "apple",
  },
  {
    id: "3",
    from: "Hermes Swift",
    subject: "Delivery Update",
    preview: "Your package is on its way and should arrive by tomorrow evening. Tracking...",
    date: "May 10",
    read: true,
    starred: false,
    provider: "google",
  },
  {
    id: "4",
    from: "Apollo Creative",
    subject: "New Design Concepts",
    preview: "I've attached the new design concepts for the website. Let me know what you...",
    date: "May 8",
    read: true,
    starred: true,
    provider: "apple",
  },
  {
    id: "5",
    from: "Hera Projects",
    subject: "Project Timeline Update",
    preview: "We need to adjust the timeline for the upcoming project. Can we schedule a...",
    date: "May 5",
    read: true,
    starred: false,
    provider: "google",
  },
]

export function MessageList() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <h3 className="text-lg font-semibold text-white">Inbox</h3>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-blue-600/20 text-blue-400 border-blue-600/30">
            Google
          </Badge>
          <Badge variant="outline" className="bg-gray-600/20 text-gray-400 border-gray-600/30">
            Apple
          </Badge>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="divide-y divide-gray-800">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 hover:bg-gray-800/50 cursor-pointer transition-colors ${
                !message.read ? "bg-gray-800/30" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  {message.provider === "google" ? (
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">
                      G
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs">
                      A
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className={`text-sm font-medium truncate ${!message.read ? "text-white" : "text-gray-400"}`}>
                      {message.from}
                    </p>
                    <div className="flex items-center gap-1">
                      {message.starred && <Star className="h-4 w-4 fill-amber-400 text-amber-400" />}
                      <span className="text-xs text-gray-500">{message.date}</span>
                    </div>
                  </div>
                  <p className={`text-sm truncate ${!message.read ? "font-medium text-gray-200" : "text-gray-400"}`}>
                    {message.subject}
                  </p>
                  <p className="text-xs text-gray-500 truncate mt-1">{message.preview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
            <Archive className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
        <div className="text-xs text-gray-500 flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          Last updated: Just now
        </div>
      </div>
    </div>
  )
}
