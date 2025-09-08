"use client";

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tracks, setTracks] = useState<Track[] | null>(null);

  return (
    <>
      <form>
        <input type="text" name="" id="" value={searchQuery} />
      </form>

      <div>
        {tracks?.map((track) => (
          <p key={track.id}>{track.title}</p>
        ))}
      </div>
    </>
  );
}
