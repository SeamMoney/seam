import { ubePoolLink } from "../hooks/useExplorer";

export default function UbeIcon(props) {
    const link = ubePoolLink(props.address);
    return (
        <div className="h-10 w-10 p-2 my-2 justify-center rounded-lg outline outline-2 outline-purple bg-purple hover:bg-opacity-30 text-transparent hover:text-white">
            <a href={link} >
            <svg width="25" height="25" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M125.002 21.4517C98.2254 33.5011 67.566 57.7941 54.6572 71.2293C54.1618 71.6686 53.6771 72.1236 53.2035 72.5942C37.1076 88.5885 39.6275 116.989 58.2545 138.01C58.1251 138.009 57.9955 138.009 57.8659 138.009C28.2632 138.009 3.88145 147.571 0.679611 159.868C-0.340164 162.675 0.0366669 170.575 0.233795 174.708V174.708C0.284561 175.773 0.32341 176.587 0.32341 177C0.32341 188.292 26.4063 200 57.9504 200C89.4945 200 115.064 189.888 115.064 177.417C115.064 177.158 115.081 176.455 115.105 175.474C115.17 172.778 115.286 167.981 115.241 164.517C115.352 163.892 115.409 163.26 115.409 162.623C115.409 161.489 115.23 160.374 114.883 159.281C121.342 157.786 127.23 154.8 132.041 150.268C131.924 150.387 131.806 150.506 131.687 150.625C130.509 151.796 129.262 152.87 127.955 153.848C136.023 149.695 141.938 140.872 149.354 129.433C172.877 89.0376 195.382 47.1175 199.456 17.9231C202.339 -2.74056 193.788 -2.10259 173.05 2.98428C162.992 5.45149 133.794 17.494 125.002 21.4517ZM113.596 156.47C107.573 146.459 87.1954 138.913 62.4071 138.085C42.6519 117.604 40.2626 89.6826 55.3181 74.7223C70.8482 59.2902 100.592 61.8571 121.865 82.4554C143.135 103.062 146.075 132.105 130.607 147.481L130.606 147.481C125.993 152.068 120.125 155.065 113.596 156.47ZM164.913 58.1946C164.913 53.1077 155.92 35.9727 149.36 32.7546C138.985 27.6678 138.985 32.7546 149.36 42.9284C153.741 47.2296 157.197 51.5298 159.727 54.6781L159.727 54.6781L159.727 54.6782C163.185 58.9808 164.913 61.132 164.913 58.1946ZM155.212 97.0264C156.207 93.8253 153.894 81.3537 150.401 78.0904C144.866 72.9358 143.864 76.137 148.404 84.4928C150.319 88.0202 151.652 91.3736 152.63 93.8304L152.63 93.8305C153.967 97.1932 154.637 98.8762 155.212 97.0264ZM108.753 170.094C111.293 167.526 112.409 165.005 112.409 162.623C112.409 160.241 111.293 157.719 108.753 155.151C106.201 152.571 102.36 150.109 97.3749 147.977C87.4165 143.717 73.45 141.009 57.8659 141.009C42.2818 141.009 28.3153 143.717 18.3569 147.977C13.3723 150.109 9.53036 152.571 6.97839 155.151C4.439 157.719 3.3232 160.241 3.3232 162.623C3.3232 165.005 4.439 167.526 6.97839 170.094C9.53036 172.675 13.3723 175.137 18.3569 177.269C28.3153 181.528 42.2818 184.236 57.8659 184.236C73.45 184.236 87.4165 181.528 97.3749 177.269C102.36 175.137 106.201 172.675 108.753 170.094Z"
        fill="#8878C3" />
    <path
        d="M149.36 32.7546C155.92 35.9727 164.914 53.1077 164.914 58.1946C164.914 63.2815 159.729 53.1077 149.36 42.9284C138.985 32.7546 138.985 27.6678 149.36 32.7546ZM150.401 78.0904C153.894 81.3537 156.207 93.8253 155.212 97.0264C154.216 100.228 152.939 92.8485 148.405 84.4928C143.865 76.137 144.866 72.9358 150.401 78.0904Z"
        fill="#6D619A" />
    <path
        d="M131.312 148.19L131.311 148.19C115.258 164.153 84.8785 161.28 63.3701 140.466C41.8703 119.636 38.5972 89.9275 54.6129 74.0129C70.6727 58.0546 101.059 60.9176 122.56 81.7372C144.06 102.566 147.328 132.269 131.312 148.19Z"
        fill="#BFB7DE" stroke="#6D619A" stroke-width="4" />
    <path
        d="M113.409 162.623C113.409 165.343 112.128 168.103 109.465 170.797C106.793 173.499 102.827 176.024 97.7683 178.188C87.6583 182.513 73.5521 185.236 57.866 185.236C42.18 185.236 28.0737 182.513 17.9637 178.188C12.9051 176.024 8.93936 173.499 6.26743 170.797C3.6039 168.103 2.3233 165.343 2.3233 162.623C2.3233 159.902 3.6039 157.142 6.26743 154.448C8.93936 151.746 12.9051 149.221 17.9637 147.057C28.0737 142.733 42.18 140.009 57.866 140.009C73.5521 140.009 87.6583 142.733 97.7683 147.057C102.827 149.221 106.793 151.746 109.465 154.448C112.128 157.142 113.409 159.902 113.409 162.623Z"
        fill="#E3DFF3" stroke="#6D619A" stroke-width="4" />
</svg>
<p className=" py-2">Ube</p>
</a>
</div>
)}