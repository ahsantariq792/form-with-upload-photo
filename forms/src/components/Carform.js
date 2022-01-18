import react from "react";
import ReactDom from 'react-dom';
import "../App.css"
import addphoto from "../images/add-photo.png"
import pic from "../images/pic.jpg"




function Carform(){
    return(
        <>        
        <div class="container">
            <div class="title">
                <h2>POST YOUR AD</h2>
            </div>
            <div class="form">
                <form name="car_form" method="POST" action="#" autocomplete="on">
                    <div class="section">
                        <div class="header_title">
                            INCLUDE SOME DETAILS
                        </div>
                        <div class="input_field">
                            <label for="title" class="form-table">Ad Title</label>
                            <input type="text" name="title" class="form-input" required/>
                        </div>
                        <div class="input_field">
                            <label for="description" class="form-table">Description</label>
                            <textarea type="text" name="description" id="" cols="30" rows="8" class="textarea" required></textarea>
                        </div>
                        <div class="input_field">
                            <label for="year" class="form-table">Year</label>
                            <input type="number" name="year" class="form-input" required/>
                        </div>
                        <div class="input_field">
                            <label for="kms" class="form-table">KM's Driven</label>
                            <input type="number" name="kms" class="form-input" required/>
                        </div>
                        <div class="input_field">
                            <label for="make" class="form-table">Make</label>
                            <div class="custom_select">
                                <select required>
                                    <option value="" disabled selected hidden>Select</option>
                                    <option value="audi">Audi</option>
                                    <option value="bmw">BMW</option>
                                    <option value="changan">Changan</option>
                                    <option value="daihatsu">Daihatsu</option>
                                    <option value="datsun">Datsun</option>
                                    <option value="honda">Honda</option>
                                    <option value="hyundai">Hyundai</option>
                                    <option value="kia">KIA</option>
                                    <option value="lexus">Lexus</option>
                                    <option value="mazda">Mazda</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="mg">MG</option>
                                    <option value="mitsubishi">Mitsubishi</option>
                                    <option value="nissan">Nissan</option>
                                    <option value="suzuki">Suzuki</option>
                                    <option value="toyota">Toyota</option>
                                    <option value="volkswagen">Volkswagen</option>
                                </select>
                            </div>
                        </div>
                        <div class="input_field">
                            <label for="fueltype" class="form-table">Fuel</label>
                            <div class="fuel_div">
                                <input type="radio" class="form-input" id="cng" name="fueltype"/>
                                <label for="cng" id="radios">CNG</label>
                                <input type="radio" class="form-input" id="diesel" name="fueltype"/>
                                <label for="diesel" id="radios">Diesel</label>
                                <input type="radio" class="form-input" id="hybrid" name="fueltype"/>
                                <label for="hybrid" id="radios">Hybrid</label>
                                <input type="radio" class="form-input" id="lpg" name="fueltype"/>
                                <label for="lpg" id="radios">LPG</label>
                                <input type="radio" class="form-input" id="petrol" name="fueltype"/>
                                <label for="petrol" id="radios">Petrol</label>
                            </div>
                        </div>
                        <div class="input_field">
                            <label for="registered_area" class="form-table">Registered in</label>
                            <div class="custom_select">
                                <select required>
                                    <option value="" disabled selected hidden>Select Area</option>
                                    <option value="attock">Attock</option>
                                    <option value="bhawalpur">Bhawalpur</option>
                                    <option value="chitral">Chitral</option>
                                    <option value="faisalabad">Faisalabad</option>
                                    <option value="hyderabad">Hyderabad</option>
                                    <option value="islamabad">Islamabad</option>
                                    <option value="jehlum">Jehlum</option>
                                    <option value="karachi">Karachi</option>
                                    <option value="lahore">Lahore</option>
                                    <option value="larkana">Larkana</option>
                                    <option value="multan">Multan</option>
                                    <option value="peshawar">Peshawar</option>
                                    <option value="quetta">Quetta</option>
                                    <option value="rawalpindi">Rawalpindi</option>
                                    <option value="sialkot">Sialkot</option>
                                </select>
                            </div>
                        </div>
                        <div class="input_field">
                            <label for="condition" class="form-table">Condition</label>
                            <div>
                                <input type="radio" class="form-input" id="new" name="condition"/>
                                <label for="new" id="radios">New</label>
                                <input type="radio" class="form-input" id="used" name="condition"/>
                                <label for="used" id="radios">Used</label>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <div class="header_title">
                            SET A PRICE
                        </div>
                        <div class="input_field">
                            <label for="price" class="form-table">Price</label>
                            <input type="number" name="price" class="form-input" placeholder="Rupees" required/>
                        </div>
                    </div>
                    <div class="section">
                        <div class="header_title">
                            UPLOAD UPTO 20 PHOTOS
                        </div>
                        <div class="input_field">
                            <div class="img_container">
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                                <div class="img_box">
                                    <img src={addphoto} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <div class="header_title">
                            CONFIRM YOUR LOCATION
                        </div>
                        <div class="input_field">
                            <label for="state" class="form-table">State</label>
                            <div class="custom_select">
                                <select required>
                                    <option value="" disabled selected hidden>Select State</option>
                                    <option value="kashmir">Azad Kashmir</option>
                                    <option value="balochistan">Balochistan</option>
                                    <option value="islamabad">Islamabad</option>
                                    <option value="kpk">Khyber Pakhtunkhuwa</option>
                                    <option value="northern_areas">Northern Areas</option>
                                    <option value="punjab">Punjab</option>
                                    <option value="sindh">Sindh</option>
                                </select>
                            </div>
                        </div>
                        <div class="input_field">
                            <label for="city" class="form-table">City</label>
                            <div class="custom_select">
                                <select required>
                                    <option value="" disabled selected hidden>Select City</option>
                                    {/* <!--Kashmir--> */}
                                    <option value="16">Bagh</option>
                                    <option value="3682">Barnala(Azad Kashmir)</option>
                                    <option value="23">Bhimber</option>
                                    <option value="50">Hajira</option>
                                    <option value="84">Kotli</option>
                                    <option value="3677">Mangla</option>
                                    <option value="103">Mirpur</option>
                                    <option value="109">Muzaffarabad</option>
                                    <option value="118">Pallandri</option>
                                    <option value="129">Rawalakot</option>
                                    {/* <!--Balochistan--> */}
                                    <option value="21">Bela</option>
                                    <option value="48">Gwadar</option>
                                    <option value="68">Jiwani</option>
                                    <option value="69">Kalat</option>
                                    <option value="79">Khuzdar</option>
                                    <option value="89">Lasbela</option>
                                    <option value="92">Loralai</option>
                                    <option value="3689">Nasirabad</option>
                                    <option value="116">Ormara</option>
                                    <option value="120">Pasni</option>
                                    <option value="124">Quetta</option>
                                    <option value="160">Zhob</option>
                                    {/* <!--Islamabad--> */}
                                    <option value="60">Islamabad</option>
                                    {/* <!--KPK--> */}
                                    <option value="9">Abbottabad</option>
                                    <option value="11">Ali Masjid</option>
                                    <option value="19">Bannu</option>
                                    <option value="20">Batagram</option>
                                    <option value="24">Buner</option>
                                    <option value="27">Charsadda</option>
                                    <option value="32">Chitral</option>
                                    <option value="34">Darra Adam Khel</option>
                                    <option value="38">Dera Ismail Khan</option>
                                    <option value="52">Hangu</option>
                                    <option value="53">Haripur</option>
                                    <option value="62">Jamrud</option>
                                    <option value="64">Jandola</option>
                                    <option value="3684">Kaghan</option>
                                    <option value="72">Karak</option>
                                    <option value="80">Kohat</option>
                                    <option value="81">Kohistan</option>
                                    <option value="3686">Laki Marwat</option>
                                    <option value="86">Lakki Marwat</option>
                                    <option value="87">Landi Kotal</option>
                                    <option value="93">Lower Dir</option>
                                    <option value="95">Malakand</option>
                                    <option value="97">Mansehra</option>
                                    <option value="98">Mardan</option>
                                    <option value="101">Mingaora</option>
                                    <option value="102">Miram Shah</option>
                                    <option value="3683">Naran</option>
                                    <option value="114">Nowshera</option>
                                    <option value="119">Parachinar</option>
                                    <option value="121">Peshawar</option>
                                    <option value="138">Shangla</option>
                                    <option value="145">Swabi</option>
                                    <option value="146">Swat</option>
                                    <option value="149">Tank</option>
                                    <option value="153">Torkham</option>
                                    <option value="155">Upper Dir</option>
                                    <option value="158">Wana</option>
                                    {/* <!--Northern Areas--> */}
                                    <option value="13">Askoley</option>
                                    <option value="29">Chilas</option>
                                    <option value="40">Ghanche</option>
                                    <option value="41">Ghizer</option>
                                    <option value="43">Gilgit</option>
                                    <option value="77">Khaplu</option>
                                    <option value="142">Skardu</option>
                                    {/* <!--Punjab--> */}
                                    <option value="10">Ahmadpur East</option>
                                    <option value="3699">Ahmedpur East</option>
                                    <option value="12">Arifwala</option>
                                    <option value="14">Attock</option>
                                    <option value="17">Bahawalnagar</option>
                                    <option value="18">Bahawalpur</option>
                                    <option value="22">Bhakkar</option>
                                    <option value="3700">Bhalwal</option>
                                    <option value="25">Burewala</option>
                                    <option value="26">Chakwal</option>
                                    <option value="28">Chichawatni</option>
                                    <option value="30">Chiniot</option>
                                    <option value="31">Chishtian Mandi</option>
                                    <option value="35">Daska</option>
                                    <option value="36">Depalpur</option>
                                    <option value="37">Dera Ghazi Khan</option>
                                    <option value="3675">Dina</option>
                                    <option value="39">Faisalabad</option>
                                    <option value="44">Gojra</option>
                                    <option value="45">Gujar Khan</option>
                                    <option value="3676">Gujjar Khan</option>
                                    <option value="46">Gujranwala</option>
                                    <option value="47">Gujrat</option>
                                    <option value="49">Hafizabad</option>
                                    <option value="54">Haroonabad</option>
                                    <option value="55">Hasan Abdal</option>
                                    <option value="56">Hasilpur</option>
                                    <option value="57">Haveli lakha</option>
                                    <option value="58">Hazro</option>
                                    <option value="3681">Jalal Pur Jatta</option>
                                    <option value="65">Jaranwala</option>
                                    <option value="66">Jhang Sadar</option>
                                    <option value="67">Jhelum</option>
                                    <option value="3698">Kamalia</option>
                                    <option value="70">Kamoke</option>
                                    <option value="73">Kasur</option>
                                    <option value="75">Khanewal</option>
                                    <option value="76">Khanpur</option>
                                    <option value="3673">Kharian</option>
                                    <option value="78">Khushab</option>
                                    <option value="82">Kot Addu</option>
                                    <option value="83">Kotli</option>
                                    <option value="85">Lahore</option>
                                    <option value="3679">Lala Musa</option>
                                    <option value="90">Layyah</option>
                                    <option value="91">Lodhran</option>
                                    <option value="94">Mailsi</option>
                                    <option value="96">Mandi Bahauddin</option>
                                    <option value="3680">Mandi Bahudin</option>
                                    <option value="99">Mian Chunnu</option>
                                    <option value="100">Mianwali</option>
                                    <option value="106">Multan</option>
                                    <option value="107">Muridike</option>
                                    <option value="108">Murree</option>
                                    <option value="110">Muzaffargarh</option>
                                    <option value="111">Nankana Sahib</option>
                                    <option value="112">Narowal</option>
                                    <option value="115">Okara</option>
                                    <option value="117">Pakpattan</option>
                                    <option value="3695">Pasrur</option>
                                    <option value="3696">Pattoki</option>
                                    <option value="3697">Phol Nagar</option>
                                    <option value="122">Pindi Bhattian</option>
                                    <option value="123">Pirmahal</option>
                                    <option value="125">Rahimyar Khan</option>
                                    <option value="126">Raiwind</option>
                                    <option value="127">Rajanpur</option>
                                    <option value="130">Rawalpindi</option>
                                    <option value="131">Sadiqabad</option>
                                    <option value="132">Safdar Abad</option>
                                    <option value="133">Sahiwal</option>
                                    <option value="134">Samundri</option>
                                    <option value="3674">Sarai Alamgir</option>
                                    <option value="136">Sargodha</option>
                                    <option value="137">Shakargarh</option>
                                    <option value="139">Sheikhüpura</option>
                                    <option value="141">Sialkot</option>
                                    <option value="143">Sohawa</option>
                                    <option value="3678">Talagang</option>
                                    <option value="150">Taxila</option>
                                    <option value="152">Toba Tek singh</option>
                                    <option value="156">Vehari</option>
                                    <option value="157">Wah</option>
                                    <option value="159">Wazirabad</option>
                                    {/* <!-- Sindh --> */}
                                    <option value="15">Badin</option>
                                    <option value="33">Dadu</option>
                                    <option value="42">Ghotki</option>
                                    <option value="51">Hala</option>
                                    <option value="59">Hyderabad</option>
                                    <option value="61">Jacobabad</option>
                                    <option value="63">Jamshoro</option>
                                    <option value="71">Karachi</option>
                                    <option value="74">Khairpur</option>
                                    <option value="3692">Kotri</option>
                                    <option value="88">Larkana</option>
                                    <option value="3691">Matiari</option>
                                    <option value="104">Mirpur Khas</option>
                                    <option value="3690">Mirpur Mathelo</option>
                                    <option value="105">Mithi</option>
                                    <option value="3688">Naushahro Feroze</option>
                                    <option value="113">Nawabshah</option>
                                    <option value="128">Ratodero</option>
                                    <option value="3687">Rohri</option>
                                    <option value="135">Sanghar</option>
                                    <option value="3694">Sehwan Sharif</option>
                                    <option value="140">Shikarpur</option>
                                    <option value="144">Sukkur</option>
                                    <option value="148">Tando Adam</option>
                                    <option value="3693">Tando Allahyar</option>
                                    <option value="151">Thatta</option>
                                    <option value="154">Umerkot</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <div class="header_title">
                            REVIEW YOUR DETAILS
                        </div>
                        <div class="input_field">
                            <div class="profile">
                                <img src={pic} alt="user profile"/>
                            </div>
                            <div id="sellerinfo">
                                <label for="username" class="form-table">Name</label>
                                <input type="text" name="username" class="form-input" required/>
                            </div>
                        </div>
                        <div class="subheading">
                            Let's verify your account
                        </div>
                        <div class="input_field">
                            <label for="phonenumber" class="form-table">Phone Number</label>
                            <input type="tel" name="phonenumber" class="form-input" placeholder="+92xxxxxxxxxx" maxlength="13" required/>
                        </div>
                    </div>
                    <div class="section" id="last_section">
                        <div class="input_field">
                            <input type="submit" class="btn-submit" value="Post Now"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
        
        
        
        
        
        </>
    )
}







export default Carform();