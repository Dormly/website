import { dmSerif, geistSans } from "./ui/fonts";

export default function Home() {
  return (
    <div className="p-8">
      <section className="">
        <h1 className={`${dmSerif.className} text-4xl mb-2 text-pretty`}>The all-in-one <span className="underline underline-offset-4 decoration-saffron">higher education suite</span>.</h1>
        <p className={`${geistSans.className} text-xl font-light max-w-[48rem] text-pretty`}>Dormly values user experience of students, faculty/staff, and administrators alike creating one seamless experience.</p>
      </section>
    </div>
  );
}
