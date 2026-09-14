import { Shield, Droplets, Anchor, Archive, HelpCircle, Layers } from 'lucide-react';

export const productCategories = {
  "Corrosion Control Solutions": {
    name: "Corrosion Control Solutions",
    icon: Shield,
    desc: "Advanced volatile corrosion inhibitor (VCI) protective solutions powered by our global joint venture with Zerust® to secure metals against oxidation and rust.",
    subcategories: {
      "Corrosion Control Solutions (Zerust® Powered)": [
        {
          id: "vci-film",
          slug: "vci-film",
          name: "VCI Film",
          category: "Corrosion Control Solutions",
          subcategory: "Corrosion Control Solutions (Zerust® Powered)",
          partner: "Zerust® Powered",
          img: "/images/Website Images/Corrosion Solutions/VCI Film Packaging.webp",
          images: [
            "/images/Website Images/Corrosion Solutions/VCI Film Packaging.webp",
            "/images/For Website/Zerust/VCI Poly film.png",
            "/images/For Website/Packaging Solutions on turnkey basis/Vacumm Packaging.png"
          ],
          shortDesc: "Zerust VCI (Volatile Corrosion Inhibitor) films release active corrosion inhibitors, creating a durable shield that prevents rust formation on metal surfaces.",
          fullDesc: "Zerust® VCI Films provide comprehensive corrosion protection for ferrous and non-ferrous metals during ocean transit, warehouse storage, and work-in-progress inventory. Active VCI molecules vaporize from the polyethylene matrix and saturate the enclosed interior, forming an invisible, molecular-thin protective layer that blocks moisture, oxygen, and contaminants from contacting metal surfaces.",
          features: [
            "Active molecular corrosion barrier for up to 3 to 5 years",
            "Protects complex geometries, recessed cavities, and drilled holes without direct contact",
            "Leaves no greasy residue; parts are immediately ready for assembly or painting",
            "High puncture resistance, moisture barrier, and tear strength",
            "Recyclable, non-toxic, and compliant with global RoHS and REACH standards"
          ],
          specifications: {
            "Material": "Polyethylene infused with Zerust® VCI formula",
            "Thickness Range": "50 microns to 250 microns (2 mil to 10 mil)",
            "Available Formats": "Rolls, Flat Bags, Gusseted Bags, Tubing, Pre-Cut Sheets",
            "Metals Protected": "Ferrous (Steel, Iron), Non-Ferrous (Copper, Brass, Aluminium), Multimetal grades",
            "Protection Duration": "Up to 5 years in clean, sealed environments",
            "Compliance": "RoHS, REACH, Military Spec MIL-PRF-22019D compliant"
          },
          applications: [
            "Automotive CKD/SKD parts export and overseas shipping",
            "Heavy machinery, engines, gearboxes, and precision machined components",
            "Electrical panels, stamped metal sheets, and pipe assemblies",
            "Long-term mothballing and warehouse storage"
          ]
        },
        {
          id: "pre-formed-3d-vci-bags-covers",
          slug: "pre-formed-3d-vci-bags-covers",
          name: "Pre-Formed 3D VCI Bags & Covers",
          category: "Corrosion Control Solutions",
          subcategory: "Corrosion Control Solutions (Zerust® Powered)",
          partner: "Zerust® Powered",
          img: "/images/For Website/Zerust/Vci bag.png",
          images: [
            "/images/For Website/Zerust/Vci bag.png",
            "/images/For Website/Zerust/Vci_bag-removebg-preview.png",
            "/images/Website Images/Corrosion Solutions/VCI Film Packaging.webp"
          ],
          shortDesc: "Custom manufactured 3D gusseted and flat Zerust® VCI bags designed to encapsulate large machinery, automotive sub-assemblies, and pallet loads.",
          fullDesc: "Custom-tailored 3-Dimensional gusseted VCI bags and large equipment covers engineered specifically for palletized loads, large crated machinery, and complex automotive assemblies. Built with heavy-gauge Zerust® formulation to establish an immediate sealed corrosion-inhibiting micro-environment during ocean freight.",
          features: [
            "Tailor-made exact 3D dimensions to fit crates, pallets, and custom skids",
            "Dramatically reduces packaging line cycle time compared to manual film wrapping",
            "Heavy gauge for extreme puncture and friction resistance against sharp corners",
            "Heat-sealable or zipper-sealable options for airtight protection"
          ],
          specifications: {
            "Material Grade": "Heavy-Duty Low Density Polyethylene + VCI Inhibitors",
            "Thickness": "100 to 250 microns",
            "Customization": "Full custom lengths, widths, gusset depth, and zipper closures",
            "Color": "Translucent Zerust Yellow / Blue (UV-stabilized outdoor grades available)",
            "Standard": "ISO 9001 certified manufacturing"
          },
          applications: [
            "Palletized CKD components",
            "Entire engine blocks and transmission units",
            "Crated industrial transformers, pumps, and CNC machinery"
          ]
        },
        {
          id: "vci-paper",
          slug: "vci-paper",
          name: "VCI Paper",
          category: "Corrosion Control Solutions",
          subcategory: "Corrosion Control Solutions (Zerust® Powered)",
          partner: "Zerust® Powered",
          img: "/images/Website Images/Corrosion Solutions/Zerust VCI paper.jpg",
          images: [
            "/images/Website Images/Corrosion Solutions/Zerust VCI paper.jpg",
            "/images/For Website/Zerust/VCI paper1.png"
          ],
          shortDesc: "A sustainable and effective solution, Zerust VCI paper is impregnated with corrosion inhibitors to protect metals during storage or shipping.",
          fullDesc: "Zerust® VCI Paper combines high-strength natural Kraft paper backing with volatile corrosion inhibitor chemistry. Available in plain Kraft, poly-coated for moisture barrier, or reinforced scrim for heavy-duty wrapping. Delivers immediate vapor-phase protection for metal parts, interleaving between coils, and wrapping precision bearings.",
          features: [
            "100% biodegradable, recyclable, and environmentally safe",
            "Rapid saturation of vapor phase inhibitors within enclosed containers",
            "Available in poly-coated moisture-resistant and reinforced scrim variants",
            "Ideal for interleaving between metal stampings and wire coils"
          ],
          specifications: {
            "Grammage / GSM": "60 GSM to 120 GSM (Standard & Heavy Duty)",
            "Backing": "Virgin Kraft paper, optional PE laminate barrier",
            "Roll Widths": "Up to 1600 mm or custom slit roll dimensions / sheets",
            "Metals Protected": "Multi-metal (Steel, Aluminum, Copper alloys)"
          },
          applications: [
            "Bearing and gear wrapping",
            "Interleaving between steel and aluminum coils/sheets",
            "Layer separation in automotive stamping bins"
          ]
        },
        {
          id: "rust-preventive-oil",
          slug: "rust-preventive-oil",
          name: "Rust Preventive Oil",
          category: "Corrosion Control Solutions",
          subcategory: "Corrosion Control Solutions (Zerust® Powered)",
          partner: "Zerust® Powered",
          img: "/images/Website Images/Corrosion Solutions/Axxanol 33 CD.webp",
          images: [
            "/images/Website Images/Corrosion Solutions/Axxanol 33 CD.webp",
            "/images/For Website/Zerust/RPO.png"
          ],
          shortDesc: "Zerust rust preventive oil provides an effective barrier that repels moisture and prevents corrosion on exposed metal surfaces.",
          fullDesc: "Zerust Axxanol™ and Axxatec™ rust preventive coatings deliver long-lasting surface protection under extreme humidity and aggressive salt-spray atmospheres. Leaves an oily, dry-to-touch, or clear thin barrier film that actively neutralizes acidic and humid atmospheres.",
          features: [
            "Superior salt-spray chamber and humidity cabinet performance",
            "Easy application via spray, dip, or brush",
            "Clean removal with standard alkaline cleaners or mild degreasers",
            "Compatible with subsequent packaging and Zerust VCI films"
          ],
          specifications: {
            "Coverage Rate": "Up to 50 m² per liter depending on application method",
            "Film Type": "Thin oily film / Dry-to-touch barrier",
            "Protection Duration": "6 to 24 months outdoor sheltered or indoor storage",
            "Packaging": "20L Jerry cans, 200L Barrels"
          },
          applications: [
            "Raw casting and forging storage",
            "Pipes, tubes, and structural steel long-term staging",
            "Precision engine shafts and cylinder liners"
          ]
        },
        {
          id: "rust-remover-oil",
          slug: "rust-remover-oil",
          name: "Rust Remover Oil",
          category: "Corrosion Control Solutions",
          subcategory: "Corrosion Control Solutions (Zerust® Powered)",
          partner: "Zerust® Powered",
          img: "/images/Website Images/Corrosion Solutions/axxanol 33 cd.jpg",
          images: [
            "/images/Website Images/Corrosion Solutions/axxanol 33 cd.jpg",
            "/images/For Website/Zerust/RPO.png"
          ],
          shortDesc: "For metal components already affected by rust, Zerust rust remover effectively cleans and restores surfaces without causing damage.",
          fullDesc: "Zerust Axxaclean™ series offers fast-acting, non-toxic rust and tarnish removal chemistry designed to restore corroded metal parts. Unlike harsh mineral acids, Axxaclean selectively targets oxidation without attacking the parent metal substrate or causing hydrogen embrittlement.",
          features: [
            "pH neutral or mild organic formulation safe for operators",
            "Removes light to heavy rust and tarnish in minutes",
            "Leaves metal surfaces clean, active, and ready for immediate VCI protection",
            "No pitting, etching, or dimension changes on precision tolerances"
          ],
          specifications: {
            "Action Mechanism": "Chelation and organic selective descaling",
            "Operating Temperature": "Ambient (15°C - 35°C) or heated dip tanks for rapid processing",
            "Packaging": "20 Liter cans, 210 Liter drums"
          },
          applications: [
            "Reclaiming rusted inventory and stamped parts",
            "Pre-treatment prior to painting or coating",
            "Maintenance and overhaul of industrial machinery"
          ]
        },
        {
          id: "vci-capsule",
          slug: "vci-capsule",
          name: "VCI Capsule",
          category: "Corrosion Control Solutions",
          subcategory: "Corrosion Control Solutions (Zerust® Powered)",
          partner: "Zerust® Powered",
          img: "/images/Website Images/Corrosion Solutions/VCI Capsule.webp",
          images: [
            "/images/Website Images/Corrosion Solutions/VCI Capsule.webp",
            "/images/For Website/Zerust/Untitled-1-removebg-preview.png"
          ],
          shortDesc: "Zerust VCI capsules are compact and versatile solutions for corrosion protection in confined spaces such as electrical panels, toolboxes, and equipment cabinets.",
          fullDesc: "Zerust® Vapor Capsule diffusers are portable, self-contained protective emitters equipped with a self-adhesive backing. They release powerful VCI vapors inside enclosed electrical enclosures, switchgears, server racks, and mechanical gearboxes to safeguard intricate contacts from corrosion.",
          features: [
            "Easy self-adhesive peel-and-stick installation",
            "Safe for delicate electronics, copper wiring, and optical components",
            "Radius of protection from 1 foot up to 6 feet per capsule",
            "Protection lifespan of 1 to 2 full years"
          ],
          specifications: {
            "Protection Radius": "Model VC 1-1 (1 ft radius), VC 2-1 (2 ft), VC 6-1 (6 ft radius)",
            "Lifespan": "Up to 2 years continuous protection in sealed enclosures",
            "Mounting": "Peel-off industrial adhesive backing"
          },
          applications: [
            "Electrical control panels, junction boxes, and PLC cabinets",
            "Marine and offshore electronics and navigation equipment",
            "High-voltage switchgears and telecommunications enclosures"
          ]
        },
        {
          id: "aluminium-barrier-foil",
          slug: "aluminium-barrier-foil",
          name: "Aluminium Barrier Foil",
          category: "Corrosion Control Solutions",
          subcategory: "Corrosion Control Solutions (Zerust® Powered)",
          partner: "Zerust® Powered",
          img: "/images/Website Images/Aluminium Barrier Foil Bag/Barrier Foil Bag.jpg",
          images: [
            "/images/Website Images/Aluminium Barrier Foil Bag/Barrier Foil Bag.jpg",
            "/images/For Website/Packaging Solutions on turnkey basis/Vacumm Packaging.png"
          ],
          shortDesc: "Zerust aluminium barrier foils provide robust protection against moisture and vapor. Perfect for export packaging and long-term storage under extreme conditions.",
          fullDesc: "Multi-layered co-extruded aluminium barrier foil laminates engineered to deliver near-zero Water Vapor Transmission Rate (WVTR) and Oxygen Transmission Rate (OTR). When heat-sealed and combined with desiccants, barrier foil creates a hermetically sealed climate chamber that protects critical aerospace, defense, and power equipment for 10+ years.",
          features: [
            "Near-zero moisture and oxygen permeability (WVTR < 0.005 g/m²/day)",
            "Exceptional puncture resistance and mechanical puncture durability",
            "Hermetically heat-sealable for custom 3D vacuum crating",
            "Military and aerospace grade packaging performance"
          ],
          specifications: {
            "Structure": "PET / Aluminium Foil / PE multi-layer laminate",
            "WVTR": "< 0.005 g/m² / 24 hours at 38°C, 90% RH",
            "Forms Available": "Rolls, 2D Flat Bags, 3D Gusseted Liners, Custom box bags",
            "Sealability": "Heat sealable with industrial hand sealers (180°C - 210°C)"
          },
          applications: [
            "Long-term overseas sea container transport",
            "Defense, aviation, and aerospace avionics packaging",
            "Turbine rotors, industrial pumps, and optical equipment"
          ]
        }
      ]
    }
  },

  "Moisture Control Solutions": {
    name: "Moisture Control Solutions",
    icon: Droplets,
    desc: "Active moisture defense and container condensation prevention systems representing Clariant Advanced, featuring Container Dri® II and bentonite clay desiccants.",
    subcategories: {
      "Moisture Control Solutions (Clariant Advanced)": [
        {
          id: "container-desiccant-container-dri-ii",
          slug: "container-desiccant-container-dri-ii",
          name: "Container Desiccant (Container Dri® II)",
          category: "Moisture Control Solutions",
          subcategory: "Moisture Control Solutions (Clariant Advanced)",
          partner: "Clariant Advanced",
          img: "/images/Website Images/Moisture Control Solutions/Container Desiccant.jpg",
          images: [
            "/images/Website Images/Moisture Control Solutions/Container Desiccant.jpg",
            "/images/For Website/CLariant/Clariant Image Container DRI II Desiccants Cargo-damaged-container-rain.jpg"
          ],
          shortDesc: "High-performance desiccants containing calcium chloride that absorb moisture inside containers during shipping, preventing 'container rain'.",
          fullDesc: "Container Dri® II is Clariant's premier calcium chloride container desiccant. It aggressively strips moisture from ambient air inside shipping containers, absorbing up to 300% of its own weight in water and locking it into an irreversible, thick, food-safe gel. It eliminates condensation and container sweat during temperature swings across equatorial trade routes.",
          features: [
            "Absorbs over 300% moisture by weight",
            "Transforms trapped moisture into non-toxic leakproof gel",
            "DMF-Free (Dimethyl Fumarate Free), non-hazardous, and food-safe",
            "Equipped with sturdy hooks for hanging securely in container corrugations"
          ],
          specifications: {
            "Active Agent": "High-purity Calcium Chloride + Gelifying starch",
            "Absorption Capacity": "Up to 300% at 90% RH and 30°C",
            "Packaging Types": "Hanging Strips with Hooks (125g x 6 bags), Pole bags, Floor bags",
            "Certifications": "FDA compliant, RoHS, REACH, Dimethyl Fumarate (DMF) Free"
          },
          applications: [
            "Ocean freight containers carrying automotive parts, steel, cocoa, grains, and textiles",
            "Intermodal railway and truck transit across climate zones",
            "High-humidity tropical shipping lanes"
          ]
        },
        {
          id: "packing-desiccant",
          slug: "packing-desiccant",
          name: "Packing Desiccant",
          category: "Moisture Control Solutions",
          subcategory: "Moisture Control Solutions (Clariant Advanced)",
          partner: "Clariant Advanced",
          img: "/images/Website Images/Moisture Control Solutions/Desi Pak 3.jpg",
          images: [
            "/images/Website Images/Moisture Control Solutions/Desi Pak 3.jpg",
            "/images/For Website/CLariant/Desipak.png"
          ],
          shortDesc: "Ideal for safeguarding packaged products. Designed to absorb moisture and maintain optimal conditions within sealed packaging.",
          fullDesc: "Clariant Desi Pak® bentonite clay and silica gel desiccant packets engineered to control relative humidity inside individual packages, export cartons, barrier foil bags, and moisture-sensitive electronic assemblies.",
          features: [
            "Natural bentonite clay – eco-friendly, non-toxic, and non-corrosive",
            "Meets US MIL-D-3464E and DIN 55473 standards",
            "Tear-resistant, dust-free Tyvek or non-woven fabric packets",
            "Precise RH buffering across varied temperature environments"
          ],
          specifications: {
            "Sizes": "1/6 Unit to 32 Units (approx. 5g up to 1000g bags)",
            "Envelope Material": "Tyvek / Non-woven / GDT Kraft",
            "Standard": "DIN 55473 & US MIL-D-3464E"
          },
          applications: [
            "Pharmaceuticals and medical diagnostic kits",
            "Consumer electronics, PCB boards, and optics",
            "Leather goods, textiles, and footwear"
          ]
        },
        {
          id: "humidity-indicator-card",
          slug: "humidity-indicator-card",
          name: "Humidity Indicator Card",
          category: "Moisture Control Solutions",
          subcategory: "Moisture Control Solutions (Clariant Advanced)",
          partner: "Clariant Advanced",
          img: "/images/Website Images/Moisture Control Solutions/HI Card.jpg",
          images: [
            "/images/Website Images/Moisture Control Solutions/HI Card.jpg"
          ],
          shortDesc: "Monitor and manage moisture levels with ease using Clariant's HICs. They provide clear, visual color feedback about humidity levels inside container packaging.",
          fullDesc: "Clariant Humidity Indicator Cards (HICs) provide visual confirmation of internal relative humidity levels inside sealed packages. Spot sensors change color from blue to pink (or cobalt-free brown to azure) as relative humidity increases, alerting quality control inspectors if packaging integrity has been compromised.",
          features: [
            "Instant visual indication of 5%, 10%, 60% or custom RH thresholds",
            "Cobalt-Dichloride-Free (CDF) and halogen-free compliant versions",
            "Crucial for electronics moisture-barrier testing (IPC/JEDEC J-STD-033)",
            "Simple drop-in quality inspection method"
          ],
          specifications: {
            "Spots Available": "3-spot (5-10-60%), 4-spot, or 6-spot (10% to 60% RH)",
            "Compliance": "IPC/JEDEC J-STD-033, MIL-I-8835"
          },
          applications: [
            "Semiconductor packaging and surface-mount devices (SMD)",
            "Aerospace instrumentation and dry-pack bags",
            "Military equipment long-term storage verification"
          ]
        },
        {
          id: "humidity-indicator-plug",
          slug: "humidity-indicator-plug",
          name: "Humidity Indicator Plug (HI Plug)",
          category: "Moisture Control Solutions",
          subcategory: "Moisture Control Solutions (Clariant Advanced)",
          partner: "Clariant Advanced",
          img: "/images/Website Images/Moisture Control Solutions/HI PLUG.jpg",
          images: [
            "/images/Website Images/Moisture Control Solutions/HI PLUG.jpg"
          ],
          shortDesc: "Precision-engineered threaded metal and high-impact plastic humidity indicator plugs for external visual inspection without breaching container seals.",
          fullDesc: "Threaded Humidity Indicator Plugs (HI Plugs) screw into rigid export transit cases, military weapon containers, storage tanks, and barrier foil bag ports. They enable operators to visually check internal humidity levels without breaking vacuum seals or opening crates.",
          features: [
            "Anodized aluminum or brass housing with high-pressure O-ring seal",
            "External inspection window without breaching packaging enclosure",
            "Reversible indicator discs for repeatable inspections",
            "Built to withstand extreme vibration, shock, and marine weathering"
          ],
          specifications: {
            "Body Material": "Anodized Aircraft-Grade Aluminum / Nickel Plated Brass",
            "Thread Standard": "3/4-14 NPT, 1/2-14 NPT or customized threads",
            "Indicator Range": "30% - 40% - 50% RH color change",
            "Standard": "MIL-I-26860 compliance"
          },
          applications: [
            "Military transit cases and weapon systems",
            "Sealed aerospace engine pods and electronics enclosures",
            "Long-term naval reserve equipment crates"
          ]
        }
      ]
    }
  },

  "Load Stabilizing Solutions": {
    name: "Load Stabilizing Solutions",
    icon: Anchor,
    desc: "High-performance load containment and securing systems manufactured to prevent cargo shifts and damage during transit.",
    subcategories: {
      "Air Dunnage Bags & Inflation Systems": [
        {
          id: "pp-woven-dunnage-bag",
          slug: "pp-woven-dunnage-bag",
          name: "PP Woven Dunnage Bag",
          category: "Load Stabilizing Solutions",
          subcategory: "Air Dunnage Bags & Inflation Systems",
          partner: "Vir Engineered",
          img: "/images/Air-Dunnage-Bags.jpg",
          images: [
            "/images/Air-Dunnage-Bags.jpg",
            "/images/handling.jpg"
          ],
          shortDesc: "Heavy-duty dunnage bags made from polypropylene woven fabric. Engineered to withstand heavy loads and harsh conditions in shipping containers.",
          fullDesc: "Manufactured at our high-capacity facility (1 million+ bags/month), Vir PP Woven Dunnage Air Bags feature an airtight multi-layer co-extruded polyethylene bladder enveloped in heavy-duty woven polypropylene. Designed to brace pallets against container walls and absorb lateral shocks during sea, rail, and road transport.",
          features: [
            "AAR (Association of American Railroads) verified load ratings Level 1 through Level 5",
            "Rapid inflation / deflation fast-flow Turbo valve technology",
            "100% moisture and chemical resistant woven outer shell",
            "Reusable and highly resistant to punctures and corner abrasion"
          ],
          specifications: {
            "Outer Layer": "100% Virgin Polypropylene Woven Fabric",
            "Inner Bladder": "Multi-layer Co-extruded Polyethylene (PE) Bladder",
            "Working Pressure": "0.2 bar to 0.8 bar depending on Level",
            "Standard Sizes": "60x110 cm, 90x120 cm, 90x180 cm, 100x220 cm, custom sizes",
            "Production Capacity": "1,000,000 bags / month"
          },
          applications: [
            "Intermodal shipping containers and railcars",
            "Beverage bottles, heavy paper reels, steel drums, and machinery",
            "Palletized food products and chemical barrels"
          ]
        },
        {
          id: "kraft-paper-dunnage-bag",
          slug: "kraft-paper-dunnage-bag",
          name: "Kraft Paper Dunnage Bag",
          category: "Load Stabilizing Solutions",
          subcategory: "Air Dunnage Bags & Inflation Systems",
          partner: "Vir Engineered",
          img: "/images/Air-Dunnage-Bags.jpg",
          images: [
            "/images/Air-Dunnage-Bags.jpg",
            "/images/For Website/Packaging Solutions on turnkey basis/Container lashing.png"
          ],
          shortDesc: "Eco-friendly, multi-layer Kraft paper dunnage bags offering high puncture resistance and stability. Ideal for securing cargo in transit.",
          fullDesc: "Multi-ply Kraft paper dunnage bags constructed with high-bursting strength virgin Kraft outer layers and airtight PE inner bladder. Engineered to fill voids, prevent cargo shifts, and reduce insurance damage claims for export cargo.",
          features: [
            "High coefficient of friction prevents cargo sliding against paper",
            "Eco-friendly 100% recyclable Kraft construction",
            "High burst pressure resistance with fast-inflation valve systems",
            "Available in 1-ply, 2-ply, and 4-ply configurations"
          ],
          specifications: {
            "Plies": "1-ply to 4-ply high tensile virgin Kraft paper",
            "Inner Liner": "Co-extruded PE film 120-150 micron",
            "Sizes": "90x120 cm, 90x180 cm, 100x200 cm, 120x240 cm"
          },
          applications: [
            "Boxed electronics, consumer goods, and pharmaceuticals",
            "Dry container logistics and cross-border trucking",
            "Export pallet load bracing"
          ]
        },
        {
          id: "air-bag-inflator",
          slug: "air-bag-inflator",
          name: "Air Bag Inflator",
          category: "Load Stabilizing Solutions",
          subcategory: "Air Dunnage Bags & Inflation Systems",
          partner: "Vir Engineered",
          img: "/images/handling.jpg",
          images: [
            "/images/handling.jpg",
            "/images/Air-Dunnage-Bags.jpg"
          ],
          shortDesc: "Industrial high-speed inflation tools for dunnage air bags available in Regular Pneumatic, Electric High-Flow, and Battery-Operated Cordless models.",
          fullDesc: "High-efficiency Air Bag Inflators engineered to maximize inflation speeds and ensure precise pressure control for dunnage bags. Features auto-shutoff mechanism to eliminate over-inflation risks and reduce loading dock cycle times.",
          features: [
            "Venturi airflow multiplier inflates bags in seconds using ambient air",
            "Available in 3 specialized models: Regular (Pneumatic air line), Electric (110V/220V blower), and Battery (Cordless 18V Li-Ion)",
            "Quick-lock bayonet nozzle fits standard Turbo fast-flow valves",
            "Integrated pressure relief safety valve prevents bag over-pressurization"
          ],
          specifications: {
            "Model Options": "1. Regular / Manual Pneumatic Venturi Gun | 2. Electric High-Flow Blower | 3. Battery Operated Cordless (18V Li-Ion)",
            "Inflation Speed": "Fills standard 90x120cm bag in under 15 seconds",
            "Air Consumption": "Low CFM demand (amplifies air via Venturi effect)",
            "Nozzle Type": "Fast-click Turbo valve connector with reverse deflation adapter"
          },
          applications: [
            "Container stuffing docks and railway freight terminals",
            "Mobile yard loading without fixed compressed air lines (Battery model)",
            "High-volume fast-paced warehouse dispatch bays"
          ]
        }
      ],
      "Pallet Stabilizing Solutions": [
        {
          id: "pallet-stabilizing-foil",
          slug: "pallet-stabilizing-foil",
          name: "Pallet Stabilizing Foil",
          category: "Load Stabilizing Solutions",
          subcategory: "Pallet Stabilizing Solutions",
          partner: "Vir Engineered",
          img: "/images/Strechfilm.jpg",
          images: [
            "/images/Strechfilm.jpg",
            "/images/For Website/Pallet stretch wrapping mc.png"
          ],
          shortDesc: "High-elasticity specialized stabilizing stretch film & hood engineered to maintain rigid vertical pallet geometry and eliminate load shifting.",
          fullDesc: "Engineered ultra-high memory stabilization foil designed to lock multi-tiered pallet loads into a solid, cohesive unit. Formulated with specialized elastomeric polymers that exert continuous holding force on shifting cargo during transport vibrations.",
          features: [
            "High elastic recovery maintains continuous tension on settling loads",
            "Reduces load tipping risk during severe road braking and rail shunting",
            "100% recyclable linear low-density polymer matrix",
            "High optical clarity for instant barcode readability"
          ],
          specifications: {
            "Thickness": "15 to 35 microns",
            "Elongation at Break": "> 400%",
            "Tensile Strength": "High transverse & longitudinal tear resistance"
          },
          applications: [
            "Palletized glass bottles, beverage cans, and chemical drums",
            "Automated high-rack warehouse logistics",
            "Export sea freight pallet stabilization"
          ]
        },
        {
          id: "grip-sheet",
          slug: "grip-sheet",
          name: "Grip Sheet",
          category: "Load Stabilizing Solutions",
          subcategory: "Pallet Stabilizing Solutions",
          partner: "Vir Engineered",
          img: "/images/void-fill.jpg",
          images: [
            "/images/void-fill.jpg",
            "/images/For Website/Pallets & Crates/Wooden pallet.png"
          ],
          shortDesc: "High-friction stabilization sheets inserted between layers of pallets. Prevents packages from slipping, sliding, or collapsing during transit.",
          fullDesc: "Anti-slip paper and cardboard grip sheets coated with high-friction polymer formulation on both sides. Inserted as tier sheets between pallet layers to stabilize stacked boxes and bags, allowing tilt angles up to 45° without load slippage.",
          features: [
            "High coefficient of friction reduces or eliminates excess stretch wrap",
            "100% recyclable, non-toxic, and reusable",
            "Water repellent coating protects bottom cartons from moisture",
            "Compatible with automatic palletizer robotic arms"
          ],
          specifications: {
            "Grammage": "110 GSM to 300 GSM Kraft",
            "Friction Angle": "Locks cartons securely up to 45° tilt",
            "Standard Sizes": "800x1200 mm (Euro Pallet), 1000x1200 mm (Standard Pallet)"
          },
          applications: [
            "Palletized beverage cartons, food bags, and chemical sacks",
            "Automated warehouse distribution centers"
          ]
        },
        {
          id: "grip-fix",
          slug: "grip-fix",
          name: "Grip Fix",
          category: "Load Stabilizing Solutions",
          subcategory: "Pallet Stabilizing Solutions",
          partner: "Vir Engineered",
          img: "/images/void-fill.jpg",
          images: [
            "/images/void-fill.jpg",
            "/images/handling.jpg"
          ],
          shortDesc: "Automated water-based anti-slip liquid adhesive system for pallet stabilization. Holds packages firmly without tearing fibers upon destacking.",
          fullDesc: "Grip Fix is a revolutionary water-based, solvent-free anti-slip adhesive applied in small drops or lines during palletizing. It generates high shear strength to prevent lateral slipping of bags or cartons, yet has low peel tensile resistance so packages separate effortlessly without surface tearing or ink damage.",
          features: [
            "High shear strength prevents side-to-side shifting during transit",
            "Zero fiber tear or package defacement when depalletizing",
            "Biodegradable, non-toxic, food-safe, and leaves no sticky residue",
            "Drastically slashes stretch wrap consumption by up to 50% to 70%"
          ],
          specifications: {
            "Composition": "Water-based synthetic resin dispersion (Solvent-Free)",
            "Application Method": "Automatic applicator head on palletizer conveyor lines",
            "Drying Time": "Instant tack / pressure-sensitive bonding",
            "Certifications": "Food-grade contact safe, biodegradable, recyclable"
          },
          applications: [
            "Flour, sugar, cement, chemical paper & plastic sacks",
            "Corrugated cartons, shrink-wrapped trays, and fruit crates"
          ]
        }
      ],
      "Cord Strap and Buckle": [
        {
          id: "composite-cord-strap",
          slug: "composite-cord-strap",
          name: "Composite Cord Strap",
          category: "Load Stabilizing Solutions",
          subcategory: "Cord Strap and Buckle",
          partner: "Vir Engineered",
          img: "/images/lashing.jpg",
          images: [
            "/images/lashing.jpg",
            "/images/handling.jpg",
            "/images/For Website/Packaging Solutions on turnkey basis/Cargo Lashing.png"
          ],
          shortDesc: "Commonly known as 'synthetic steel,' made of high-tenacity polyester fibers coated with polymer. Safe, lightweight, and weather resistant.",
          fullDesc: "Composite polyester strapping consists of high-tenacity parallel polyester yarn filaments embedded in a protective polypropylene coating. Known as 'synthetic steel,' it matches the breaking strength of steel strap while offering shock absorption, elasticity, and zero risk of injury or rust.",
          features: [
            "High breaking strength up to 2500+ daN",
            "Shock-absorbing elongation memory retains tension over rough transit",
            "Will not scratch, mar, or rust finished machinery surfaces",
            "Safe to handle with no sharp snap-back edges"
          ],
          specifications: {
            "Widths": "13mm (1/2\"), 16mm (5/8\"), 19mm (3/4\"), 25mm (1\"), 32mm (1-1/4\")",
            "System Strength": "Up to 3,500 kg (with phosphate coated wire buckle)",
            "Coating": "Polypropylene polymer matrix"
          },
          applications: [
            "Heavy machinery and flat-rack container lashing",
            "Steel pipes, chemical drums, and timber bundling",
            "Export cargo securing in open-top containers"
          ]
        },
        {
          id: "wire-buckles",
          slug: "wire-buckles",
          name: "Wire Buckles",
          category: "Load Stabilizing Solutions",
          subcategory: "Cord Strap and Buckle",
          partner: "Vir Engineered",
          img: "/images/lashing.jpg",
          images: [
            "/images/lashing.jpg"
          ],
          shortDesc: "Heavy-duty steel buckles designed specifically to pair with composite strap for joint efficiency and maximum security.",
          fullDesc: "High-grade carbon steel wire buckles with galvanised or phosphate surface coating. Specifically engineered to provide maximum joint holding efficiency (up to 95% of strap tensile strength) when paired with composite and woven strapping.",
          features: [
            "Galvanized or phosphate-coated to prevent slippage under tension",
            "Superior grip lock design prevents loosening during transport vibrations",
            "Easy manual threading with standard tensioner tools"
          ],
          specifications: {
            "Sizes": "13mm, 16mm, 19mm, 25mm, 32mm",
            "Finish": "Phosphate Coated / Galvanized Zinc",
            "Material": "Cold-drawn high-tensile carbon steel wire"
          },
          applications: [
            "Heavy industrial strapping and lashing systems",
            "Container door securing and heavy equipment tie-downs"
          ]
        },
        {
          id: "manual-tensioner",
          slug: "manual-tensioner",
          name: "Manual Tensioner",
          category: "Load Stabilizing Solutions",
          subcategory: "Cord Strap and Buckle",
          partner: "Vir Engineered",
          img: "/images/handling.jpg",
          images: [
            "/images/handling.jpg"
          ],
          shortDesc: "Industrial-grade tensioning tool to tighten composite strapping around heavy cargo and palletized loads.",
          fullDesc: "Heavy-duty ratchet tensioner engineered for high-tension application of composite and woven cord strapping up to 32mm width. Features a built-in hardened steel cutter for clean strap cutting in a single motion.",
          features: [
            "Ergonomic handle for maximum mechanical leverage with low operator strain",
            "Integrated cutting blade eliminates the need for separate shears",
            "Rugged steel body built for continuous industrial and dockyard use"
          ],
          specifications: {
            "Compatible Widths": "Up to 32mm (1-1/4\")",
            "Mechanism": "Hardened ratchet wheel with reverse lock",
            "Weight": "Approx. 2.4 kg"
          },
          applications: [
            "Warehouse packing lines",
            "Container stuffing docks and flatbed tie-down stations"
          ]
        }
      ],
      "Cargo Securing Essentials": [
        {
          id: "container-safety-net",
          slug: "container-safety-net",
          name: "Container Safety Net",
          category: "Load Stabilizing Solutions",
          subcategory: "Cargo Securing Essentials",
          partner: "Vir Engineered",
          img: "/images/For Website/Packaging Solutions on turnkey basis/Container lashing.png",
          images: [
            "/images/For Website/Packaging Solutions on turnkey basis/Container lashing.png",
            "/images/For Website/Packaging Solutions on turnkey basis/Cargo Lashing.png"
          ],
          shortDesc: "Customized safety nets designed to prevent load shifts when opening container doors. Made from UV and weather-resistant premium fibers.",
          fullDesc: "Engineered container safety barrier nets made from high-tenacity woven webbing. Installed across the doorway or between cargo bays inside ISO containers to prevent dangerous cargo spillage when doors are opened at destination ports.",
          features: [
            "Quick-release cam buckles and integrated carabiners for fast installation",
            "Prevents workplace injury and cargo loss during destination container destuffing",
            "UV-stabilized polyester webbing with high breaking strength"
          ],
          specifications: {
            "Dimensions": "Standard 2.4m x 2.4m for ISO 20ft & 40ft containers",
            "Webbing Width": "25mm to 50mm heavy-duty polyester",
            "Load Capacity": "Up to 2,000 kg breaking strength"
          },
          applications: [
            "Consumer goods and boxed cargo inside marine shipping containers",
            "Chemical drums and barrel container shipments"
          ]
        },
        {
          id: "adjustable-cargo-bar",
          slug: "adjustable-cargo-bar",
          name: "Adjustable Cargo Bar",
          category: "Load Stabilizing Solutions",
          subcategory: "Cargo Securing Essentials",
          partner: "Vir Engineered",
          img: "/images/handling.jpg",
          images: [
            "/images/handling.jpg"
          ],
          shortDesc: "Heavy-duty adjustable steel cargo bars with non-slip rubber ends. Keeps cargo locked in place within trucks, trailers, and shipping containers.",
          fullDesc: "Telescopic ratchet cargo load lock bars constructed from high-strength steel or structural aluminum. Fitted with non-marking rubber articulation feet that grip truck walls securely to prevent cargo tipping and sliding.",
          features: [
            "Heavy-duty mechanical ratchet lock mechanism",
            "Adjustable extension spans to fit diverse truck bed and van widths",
            "Pivoting non-slip rubber foot pads grip wall corrugations tightly"
          ],
          specifications: {
            "Adjustment Range": "2.1 meters to 2.7 meters (82\" to 106\")",
            "Material": "Heavy-duty gauge steel / structural aluminum",
            "Lock Type": "Ratchet action with security release"
          },
          applications: [
            "Logistics fleet trucks, box trailers, and dry van transport",
            "Partial truckload (LTL) cargo separation"
          ]
        },
        {
          id: "lifting-and-ratchet-belt",
          slug: "lifting-and-ratchet-belt",
          name: "Lifting and Ratchet Belt",
          category: "Load Stabilizing Solutions",
          subcategory: "Cargo Securing Essentials",
          partner: "Vir Engineered",
          img: "/images/For Website/Packaging Solutions on turnkey basis/Cargo Lashing.png",
          images: [
            "/images/For Website/Packaging Solutions on turnkey basis/Cargo Lashing.png",
            "/images/For Website/Packaging Solutions on turnkey basis/Container lashing.png"
          ],
          shortDesc: "High-strength polyester webbing ratchet belts for secure lifting and anchoring of heavy machinery and loads.",
          fullDesc: "Industrial ratchet tie-down straps and flat webbing lifting slings fabricated from 100% high-tenacity polyester yarn. Equipped with heavy-duty cast steel ratchet buckles and double-J hooks for flatbed and container lashing.",
          features: [
            "Certified Safety Factor 7:1 for lifting slings, 2:1 for tie-down straps",
            "High resistance to abrasion, oil, and harsh weather exposure",
            "Supplied with batch test certificates conforming to EN 12195-2 and EN 1492-1"
          ],
          specifications: {
            "Widths": "25mm, 35mm, 50mm, 75mm, 100mm",
            "Lashing Capacity (LC)": "1 Ton to 10 Tons",
            "Hardware": "Double J Hooks, Claw Hooks, Heavy-duty Ratchet Buckle"
          },
          applications: [
            "Heavy machinery flatbed transport and project cargo lashing",
            "Over-dimensional cargo (ODC) securing"
          ]
        }
      ]
    }
  },

  "Protective Packaging Solutions": {
    name: "Protective Packaging Solutions",
    icon: Layers,
    desc: "End-of-line packaging systems, strapping, wrapping, and edge protection to ensure structural stability and protection from scratches or impact.",
    subcategories: {
      "PP Strapping Solutions": [
        {
          id: "pp-strapping-belt",
          slug: "pp-strapping-belt",
          name: "PP Strapping Belt (Polypropylene)",
          category: "Protective Packaging Solutions",
          subcategory: "PP Strapping Solutions",
          partner: "Vir Engineered",
          img: "/images/For Website/pp-strapping-belt-250x250.jpg",
          images: [
            "/images/For Website/pp-strapping-belt-250x250.jpg",
            "/images/For Website/Automatic Strapping Machine.png"
          ],
          shortDesc: "Premium grade polypropylene (PP) strapping engineered for manual, semi-automatic, and fully automatic carton sealing and bundling.",
          fullDesc: "Manufactured from 100% virgin polypropylene polymer with high camber accuracy. Available across standard widths (9mm, 12mm, 15mm, 19mm) with consistent wall thickness, high tensile elasticity, and uniform thermal heat-sealing joint strength. Compatible with all tabletop and arch strapping machines.",
          features: [
            "Precision camber accuracy ensures jam-free machine feeding at high speeds",
            "High joint efficiency with heat seal, friction weld, or metal clip closures",
            "Full industrial size chart: 9mm, 12mm, 15mm, and 19mm standard widths",
            "Available in Virgin Transparent, White, Yellow, Blue, and custom branded logo printing"
          ],
          specifications: {
            "Size Chart (Width x Thickness)": "9mm x 0.60mm | 12mm x 0.65mm | 15mm x 0.75mm | 19mm x 0.85mm",
            "Tensile Breaking Strength": "9mm (100 kg) | 12mm (150 kg) | 15mm (220 kg) | 19mm (320 kg)",
            "Length per Roll": "9mm (3000m) | 12mm (2500m) | 15mm (1800m) | 19mm (1200m)",
            "Core Dimensions": "200mm (8\") ID x 190mm Width & 406mm (16\") ID",
            "Machine Compatibility": "Semi-Automatic Tabletop, Fully Automatic Arch, and Manual Tensioners"
          },
          applications: [
            "Corrugated carton bundling and e-commerce shipper sealing",
            "Newspaper, publication, and stationery bundle strapping",
            "Apparel exports, light palletization, and FMCG packaging"
          ]
        },
        {
          id: "automatic-strapping-machine",
          slug: "automatic-strapping-machine",
          name: "Automatic Strapping Machine",
          category: "Protective Packaging Solutions",
          subcategory: "PP Strapping Solutions",
          partner: "Vir Engineered",
          img: "/images/For Website/Automatic Strapping Machine.png",
          images: [
            "/images/For Website/Automatic Strapping Machine.png",
            "/images/For Website/pp-strapping-belt-250x250.jpg"
          ],
          shortDesc: "Industrial high-speed automatic arch strapping machine for conveyor production lines with jam-free technology.",
          fullDesc: "High-throughput arch-type automatic strapping machine designed for seamless integration into conveyor lines. Features rapid strap feeding (up to 30 straps/min), electronic tension adjustment, and brushless motor drives.",
          features: [
            "Fast strapping cycle: up to 30 packages per minute",
            "Automated strap loop ejector and auto-refeed technology prevents jams",
            "Precision electronic heater blade jointing"
          ],
          specifications: {
            "Arch Sizes": "850 x 600 mm (Custom arches available)",
            "Cycle Speed": "Under 2.2 seconds per cycle",
            "Power Supply": "220V/380V, 50Hz"
          },
          applications: [
            "E-commerce fulfillment centers and logistics hubs",
            "Food processing, printing, and manufacturing plants"
          ]
        },
        {
          id: "box-strapping-machine",
          slug: "box-strapping-machine",
          name: "Box Strapping Machine",
          category: "Protective Packaging Solutions",
          subcategory: "PP Strapping Solutions",
          partner: "Vir Engineered",
          img: "/images/For Website/Automatic Strapping Machine.png",
          images: [
            "/images/For Website/Automatic Strapping Machine.png",
            "/images/handling.jpg"
          ],
          shortDesc: "Semi-automatic tabletop carton strapping machine designed for fast, efficient box sealing in dispatch and warehouse stations.",
          fullDesc: "Semi-automatic open-cabinet tabletop box strapping machine. The operator places the package on the stainless steel table, feeds the strap loop, and the machine automatically tensions, heat-seals, and cuts the strap in under 1.5 seconds.",
          features: [
            "Instant heating blade seals straps cleanly within seconds",
            "External mechanical tension knob for effortless tension adjustment",
            "Energy-saving automatic motor shut-off when idle for 60 seconds",
            "Stainless steel worktop and durable heavy-gauge steel casing"
          ],
          specifications: {
            "Strap Width Compatibility": "6mm to 15mm PP Strap",
            "Strapping Speed": "1.5 seconds per strap cycle",
            "Tension Range": "15 kg to 50 kg adjustable",
            "Power Supply": "Single Phase 220V, 50Hz"
          },
          applications: [
            "Warehouse packing dispatch desks, courier sorting centers",
            "Retail distribution, electronics packaging, food carton bundling"
          ]
        }
      ],
      "PET Strapping Solutions": [
        {
          id: "pet-strap",
          slug: "pet-strap",
          name: "PET Strap",
          category: "Protective Packaging Solutions",
          subcategory: "PET Strapping Solutions",
          partner: "Vir Engineered",
          img: "/images/For Website/PET_Strap-removebg-preview.png",
          images: [
            "/images/For Website/PET_Strap-removebg-preview.png",
            "/images/strapping.jpg",
            "/images/For Website/lgt-260-1-800x563.png"
          ],
          shortDesc: "High tensile strength polyester strapping designed as a replacement for steel straps. Offers excellent elongation and recovery for securing heavy-duty shipments.",
          fullDesc: "Vir High-Tenacity Polyester (PET) Strapping is engineered as the premier modern alternative to conventional steel strapping. PET strapping provides exceptional shock-absorbing elasticity, retaining tension on settling loads without losing strength or rusting on products.",
          features: [
            "High retained tension absorbs transit shocks without snapping",
            "Zero rust marks on valuable export goods",
            "Up to 50% cost savings compared to steel strap per meter",
            "Compatible with battery-powered friction weld tools and automatic machines"
          ],
          specifications: {
            "Width Range": "9mm, 12mm, 15mm, 19mm, 25mm, 32mm",
            "Thickness": "0.6mm to 1.30mm",
            "Surface Finish": "Embossed or Smooth green",
            "Breaking Strength": "Up to 1,200 kg tensile strength",
            "Core Size": "406mm x 150mm standard industrial core"
          },
          applications: [
            "Ceramic tiles, glass sheets, and brick palletization",
            "Cotton bales, paper reels, and aluminum extrusions",
            "Heavy steel coils and automotive parts crating"
          ]
        },
        {
          id: "pet-strap-seal",
          slug: "pet-strap-seal",
          name: "PET Strap Seal",
          category: "Protective Packaging Solutions",
          subcategory: "PET Strapping Solutions",
          partner: "Vir Engineered",
          img: "/images/strapping.jpg",
          images: [
            "/images/strapping.jpg"
          ],
          shortDesc: "Heavy-duty serrated metal seals ensuring high joint efficiency when securing PET strap around pallets.",
          fullDesc: "Serrated steel seals engineered specifically for polyester strapping. The internal teeth bite into the PET strap during crimping, preventing strap slip even under severe dynamic transit vibrations.",
          features: [
            "Internal micro-serrations lock strap firmly in place",
            "Galvanized coating prevents rust staining on packages",
            "Compatible with standard manual PET sealers"
          ],
          specifications: {
            "Sizes": "12mm, 16mm, 19mm",
            "Material": "Cold-rolled carbon steel with zinc coating"
          },
          applications: [
            "Manual pallet strapping stations",
            "Heavy lumber and masonry pallet securing"
          ]
        },
        {
          id: "pneumatic-strapping-tool",
          slug: "pneumatic-strapping-tool",
          name: "Pneumatic Strapping Tool",
          category: "Protective Packaging Solutions",
          subcategory: "PET Strapping Solutions",
          partner: "Vir Engineered",
          img: "/images/handling.jpg",
          images: [
            "/images/handling.jpg"
          ],
          shortDesc: "High-speed air-operated tool that tensions, friction-welds, and cuts PET straps automatically.",
          fullDesc: "Industrial pneumatic strapping tool powered by compressed air. Completes tensioning, high-frequency friction heat-welding, and clean cutting at the touch of dual pushbuttons in under 3 seconds.",
          features: [
            "Friction heat welding eliminates need for metal clips or seals",
            "High tensioning force up to 3500N for heavy industrial bundles",
            "Lightweight ergonomic body with durable aluminum alloy casing"
          ],
          specifications: {
            "Air Pressure": "0.5 - 0.8 MPa (72 - 116 PSI)",
            "Strap Width": "13mm - 19mm PET and PP strap",
            "Joint Efficiency": "Approx. 85% of strap breaking strength"
          },
          applications: [
            "Steel mills, brick yards, and heavy machinery packing"
          ]
        },
        {
          id: "battery-operated-strapping-tool",
          slug: "battery-operated-strapping-tool",
          name: "Battery Operated Strapping Tool",
          category: "Protective Packaging Solutions",
          subcategory: "PET Strapping Solutions",
          partner: "Vir Engineered",
          img: "/images/For Website/lgt-260-1-800x563.png",
          images: [
            "/images/For Website/lgt-260-1-800x563.png",
            "/images/For Website/PET_Strap-removebg-preview.png"
          ],
          shortDesc: "Cordless, battery-powered strapping tool. Offers single-handed tensioning and welding for maximum mobile flexibility.",
          fullDesc: "Next-generation portable handheld strapping tool powered by high-capacity Lithium-Ion batteries. Features digital touchscreen settings for tension force and weld cooling time, giving operators complete freedom around the warehouse.",
          features: [
            "Cordless mobility – up to 400+ strapping cycles per charge",
            "Brushless motor technology for minimal maintenance and long service life",
            "Digital touch display to adjust tension force and weld time",
            "Single-button automatic operation"
          ],
          specifications: {
            "Battery": "18V 4.0Ah / 5.0Ah Li-Ion (Includes fast charger)",
            "Tension Force": "400N to 2800N adjustable",
            "Strap Compatibility": "PP & PET straps (9mm - 16mm or 16mm - 19mm)",
            "Weight": "3.8 kg including battery"
          },
          applications: [
            "Dockyard container stuffing and mobile pallet wrapping lines",
            "Automotive manufacturing and steel coil distribution"
          ]
        },
        {
          id: "strap-dispenser",
          slug: "strap-dispenser",
          name: "Strap Dispenser",
          category: "Protective Packaging Solutions",
          subcategory: "PET Strapping Solutions",
          partner: "Vir Engineered",
          img: "/images/handling.jpg",
          images: [
            "/images/handling.jpg"
          ],
          shortDesc: "Heavy-duty mobile cart dispenser with accessory tray. Prevents strap tangling and allows easy transport of strapping rolls.",
          fullDesc: "Heavy-duty steel strapping dispenser trolley equipped with large rubber wheels, an automatic anti-backlash brake, and a spacious storage tray for tools and seals.",
          features: [
            "Heavy-gauge tubular steel construction with industrial powder coat",
            "Anti-backlash brake prevents roll unspooling and strap tangles",
            "Large wheels for effortless navigation across uneven factory floors"
          ],
          specifications: {
            "Core Size": "406mm (16\") & 200mm (8\") core adapters",
            "Tool Tray": "Includes steel storage bin for tensioners, sealers, and clips"
          },
          applications: [
            "Mobile packing lines and warehouse shipping areas"
          ]
        }
      ],
      "Steel Strapping Solutions": [
        {
          id: "steel-strap",
          slug: "steel-strap",
          name: "Steel Strap",
          category: "Protective Packaging Solutions",
          subcategory: "Steel Strapping Solutions",
          partner: "Vir Engineered",
          img: "/images/For Website/Steel Strap.png",
          images: [
            "/images/For Website/Steel Strap.png",
            "/images/25mm-Steel-Strapping..webp"
          ],
          shortDesc: "Maximum load security steel strapping. Heat-treated for extreme breaking strength. Ideal for metal coils, pipes, and heavy engineering.",
          fullDesc: "Cold-rolled, heat-treated high-tensile steel strapping engineered for extreme industrial duty. Finished with painted, waxed, or zinc coating to ensure low friction feeding through automatic heads and maximum corrosion resistance during transit.",
          features: [
            "Ultra-high tensile strength and minimal elongation under load",
            "Rounded smooth safety edges protect operator hands",
            "Black painted and waxed surface for smooth tool tensioning"
          ],
          specifications: {
            "Widths": "12.7mm (1/2\"), 19mm (3/4\"), 32mm (1-1/4\")",
            "Thickness": "0.5mm to 0.9mm",
            "Grade": "Standard Duty & High Tensile Heat-Treated"
          },
          applications: [
            "Steel coils, hot rolled sheets, and iron castings",
            "Timber bundles, concrete pipes, and heavy machinery"
          ]
        },
        {
          id: "steel-strap-seal",
          slug: "steel-strap-seal",
          name: "Steel Strap Seal",
          category: "Protective Packaging Solutions",
          subcategory: "Steel Strapping Solutions",
          partner: "Vir Engineered",
          img: "/images/25mm-Steel-Strapping..webp",
          images: [
            "/images/25mm-Steel-Strapping..webp"
          ],
          shortDesc: "High-grade steel seals designed to secure heavy metal loads under maximum tension.",
          fullDesc: "Snap-on and thread-on steel strapping seals made of heavy-gauge cold-rolled carbon steel. Engineered to withstand extreme tension without shear failure during craning and rough transit.",
          features: [
            "Available in Snap-on, Thread-on, and Overlap designs",
            "Corrosion-resistant zinc finish",
            "Maximum interlocking grip when crimped"
          ],
          specifications: {
            "Sizes": "12.7mm, 19mm, 32mm width sizes",
            "Type": "Snap-on (Open) & Overlap (Closed/Push) seals"
          },
          applications: [
            "Bundling steel tubes, ingots, and heavy timber"
          ]
        },
        {
          id: "sealless-tool",
          slug: "sealless-tool",
          name: "Sealless Tool (ST ECO, ST IMa)",
          category: "Protective Packaging Solutions",
          subcategory: "Steel Strapping Solutions",
          partner: "Vir Engineered",
          img: "/images/handling.jpg",
          images: [
            "/images/handling.jpg"
          ],
          shortDesc: "Advanced combination tools that tension, punch-lock, and cut steel straps without needing individual metal seals.",
          fullDesc: "Precision manual combination strapping tools that perform tensioning, triple-notch punch interlock sealless jointing, and strap cut-off in one unit. Eliminates the recurring cost and hassle of separate metal seals.",
          features: [
            "Sealless interlock joint eliminates need for metal clips, saving 10-15% on packaging consumable costs",
            "Triple-notch joint provides up to 80% joint strength efficiency",
            "Robust die-cast construction for rugged dockyard environments"
          ],
          specifications: {
            "Strap Width": "12.7mm, 16mm, 19mm",
            "Strap Thickness": "0.5mm - 0.7mm high tensile steel",
            "Weight": "Approx. 3.5 kg"
          },
          applications: [
            "Flat packages, crates, and metal stamping bundles"
          ]
        },
        {
          id: "manual-steel-strapping-range",
          slug: "manual-steel-strapping-range",
          name: "Manual Steel Strapping Range",
          category: "Protective Packaging Solutions",
          subcategory: "Steel Strapping Solutions",
          partner: "Vir Engineered",
          img: "/images/handling.jpg",
          images: [
            "/images/handling.jpg"
          ],
          shortDesc: "Durable manual tensioners and sealers for steel strapping operations.",
          fullDesc: "Industrial manual feed-wheel tensioners and long-handle side-action sealers designed for high-tensile steel strapping up to 32mm. Built to provide reliable mechanical clamping in extreme workshop conditions.",
          features: [
            "Hardened alloy steel jaws for long-wearing crimping",
            "High mechanical leverage minimizes operator fatigue",
            "Simple field-maintainable components"
          ],
          specifications: {
            "Tools": "Feedwheel Tensioner + Single/Double Notch Sealer",
            "Strap Sizes": "19mm to 32mm"
          },
          applications: [
            "Foundries, steel service centers, and scrap recycling"
          ]
        },
        {
          id: "pneumatic-steel-strapping-range",
          slug: "pneumatic-steel-strapping-range",
          name: "Pneumatic Steel Strapping Range",
          category: "Protective Packaging Solutions",
          subcategory: "Steel Strapping Solutions",
          partner: "Vir Engineered",
          img: "/images/handling.jpg",
          images: [
            "/images/handling.jpg"
          ],
          shortDesc: "Pneumatic tensioner and sealer tools for high-volume industrial steel strapping.",
          fullDesc: "Pneumatic powered steel strapping tensioners and push-type sealers engineered for heavy round bundles, coils, and irregular shapes. Delivers up to 9,000N of tension with push-button simplicity.",
          features: [
            "Massive pneumatic tension force for tight bundle strapping",
            "Ideal for curved surfaces like steel coils and pipe packs",
            "Rugged cast iron casing withstands continuous heavy duty"
          ],
          specifications: {
            "Air Pressure": "0.5 - 0.7 MPa",
            "Strap Width": "19mm to 32mm steel strapping",
            "Tension Force": "Up to 9,000N"
          },
          applications: [
            "Coil lashing in steel manufacturing and pipe rolling mills"
          ]
        }
      ],
      "Wrapping Solutions": [
        {
          id: "stretch-film",
          slug: "stretch-film",
          name: "Stretch Film",
          category: "Protective Packaging Solutions",
          subcategory: "Wrapping Solutions",
          partner: "Vir Engineered",
          img: "/images/Strechfilm.jpg",
          images: [
            "/images/Strechfilm.jpg",
            "/images/For Website/Pallet stretch wrapping mc.png"
          ],
          shortDesc: "High-cling industrial stretch wrap. Provides excellent puncture resistance, dust protection, and moisture barrier for palletized shipments.",
          fullDesc: "Cast and blown co-extruded LLDPE stretch wrap film available in manual hand rolls and high-speed machine rolls (up to 300% pre-stretch). High clarity, silent unwind, and outstanding cling properties secure pallet loads against shifting, dust, and rain.",
          features: [
            "Power pre-stretch capability up to 300% significantly reduces film usage",
            "Exceptional puncture resistance against sharp crate corners",
            "High optical clarity for easy barcode scanning through the wrap"
          ],
          specifications: {
            "Thickness": "12 microns to 35 microns (50 gauge to 140 gauge)",
            "Width": "500mm standard (Custom widths available)",
            "Types": "Manual Hand Wrap & Machine Power Pre-Stretch Rolls"
          },
          applications: [
            "Pallet unitization across all manufacturing and warehousing sectors",
            "Export moisture and dust containment"
          ]
        },
        {
          id: "pallet-wrapping-machine",
          slug: "pallet-wrapping-machine",
          name: "Pallet Wrapping Machine",
          category: "Protective Packaging Solutions",
          subcategory: "Wrapping Solutions",
          partner: "Vir Engineered",
          img: "/images/For Website/Pallet stretch wrapping mc.png",
          images: [
            "/images/For Website/Pallet stretch wrapping mc.png",
            "/images/Strechfilm.jpg"
          ],
          shortDesc: "Semi-automatic and automatic rotary table wrapping machines for consistent, cost-effective pallet wrapping.",
          fullDesc: "Heavy-duty rotary turntable pallet stretch wrapping machine equipped with powered pre-stretch film carriage (up to 250%-300%), photocell automatic pallet height detection, and programmable wrap cycle controls.",
          features: [
            "Saves up to 50% film consumption compared to hand wrapping",
            "Standard 2000kg turntable load capacity with soft-start rotation",
            "PLC touch screen with custom wrap pattern memory"
          ],
          specifications: {
            "Turntable Diameter": "1650 mm (Handles 1200x1200mm pallets)",
            "Max Pallet Height": "2400 mm",
            "Turntable Speed": "0 - 12 RPM variable speed",
            "Pre-stretch Ratio": "Up to 300% powered pre-stretch"
          },
          applications: [
            "High-throughput distribution centers, food & beverage plants, chemical warehouses"
          ]
        },
        {
          id: "box-wrapping-machine",
          slug: "box-wrapping-machine",
          name: "Box Wrapping Machine",
          category: "Protective Packaging Solutions",
          subcategory: "Wrapping Solutions",
          partner: "Vir Engineered",
          img: "/images/handling.jpg",
          images: [
            "/images/handling.jpg"
          ],
          shortDesc: "Compact wrapping machines designed to quickly wrap individual boxes, parcels, or small crates.",
          fullDesc: "Rotary orbital carton wrapping machine designed for quick protective wrapping of individual parcels, luggage, and small cartons. Provides moisture proofing and tamper evidence for e-commerce shipments.",
          features: [
            "Adjustable clamp arm keeps boxes securely centered",
            "Foot switch control for hands-free operation",
            "Compact footprint suitable for courier and packing dispatch desks"
          ],
          specifications: {
            "Package Size Range": "L (250-900mm) x W (200-600mm) x H (200-800mm)",
            "Turntable Speed": "0 - 20 RPM"
          },
          applications: [
            "E-commerce packaging, electronics courier parcels, air cargo shipping"
          ]
        },
        {
          id: "hand-sf-dispenser",
          slug: "hand-sf-dispenser",
          name: "Hand SF Dispenser",
          category: "Protective Packaging Solutions",
          subcategory: "Wrapping Solutions",
          partner: "Vir Engineered",
          img: "/images/handling.jpg",
          images: [
            "/images/handling.jpg"
          ],
          shortDesc: "Ergonomic hand dispensers for stretch film. Reduces operator fatigue and ensures proper film tension.",
          fullDesc: "Ergonomic aluminum and heavy-duty plastic stretch film dispensers designed to optimize hand wrapping. Features tension adjustment knobs to ensure consistent film stretch without hand burns.",
          features: [
            "Cushioned ergonomic grips minimize operator wrist strain",
            "Quick-release tension dial for precise film stretching",
            "Accepts standard 3-inch core film rolls"
          ],
          specifications: {
            "Roll Width": "300mm to 500mm rolls",
            "Material": "Lightweight aluminum body with steel base"
          },
          applications: [
            "Manual pallet wrapping in dispatch zones"
          ]
        }
      ],
      "Edge & Corner Protection": [
        {
          id: "paper-corner-board",
          slug: "paper-corner-board",
          name: "Paper Corner Board",
          category: "Protective Packaging Solutions",
          subcategory: "Edge & Corner Protection",
          partner: "Vir Engineered",
          img: "/images/For Website/Corner board.png",
          images: [
            "/images/For Website/Corner board.png",
            "/images/corner_board.jpg",
            "/images/stacking_strenth_board.jpg"
          ],
          shortDesc: "Heavy-duty compressed paper corners that reinforce pallet stacking strength and protect box edges from strap crushing.",
          fullDesc: "High-density multi-ply paper edge protectors (V-boards / angle boards) laminated under high hydraulic pressure with water-resistant adhesives. Dramatically boosts vertical stacking strength of pallet loads and prevents strapping from cutting into corrugated boxes.",
          features: [
            "100% recyclable, bio-degradable, and eco-friendly Kraft paper",
            "Increases pallet double-stacking load limits by up to 40%",
            "Prevents strapping indentations and corner crush damage",
            "Available in standard V-profile, U-profile, and notch-cut for rounded coils"
          ],
          specifications: {
            "Leg Length (Wings)": "25mm x 25mm up to 100mm x 100mm",
            "Thickness": "2mm to 10mm",
            "Length": "50mm short pads up to 4000mm full pallet corner profiles"
          },
          applications: [
            "Agricultural produce exports, food & beverage cartons",
            "Sheet metal and furniture corner protection",
            "Automotive parts palletization"
          ]
        },
        {
          id: "plastic-edge-guard",
          slug: "plastic-edge-guard",
          name: "Plastic Edge Guard",
          category: "Protective Packaging Solutions",
          subcategory: "Edge & Corner Protection",
          partner: "Vir Engineered",
          img: "/images/Frame_cut_protectors.jpg",
          images: [
            "/images/Frame_cut_protectors.jpg",
            "/images/Side_protection.jpg"
          ],
          shortDesc: "Durable plastic edge protectors that distribute strap pressure and protect delicate product corners from strapping friction.",
          fullDesc: "Heavy-duty injection molded polypropylene plastic corner protectors equipped with built-in strap guide channels. Distributes high strapping tension across a broad surface area, protecting fragile goods from crushing.",
          features: [
            "Molded strap rib channel keeps PET and steel strapping locked in position",
            "High impact resistance, reusable, and weatherproof",
            "Will not soften or degrade in outdoor humid weather"
          ],
          specifications: {
            "Material": "100% High-Impact Virgin Polypropylene",
            "Sizes": "35mm x 35mm, 50mm x 50mm, 75mm x 75mm",
            "Strap Channel": "Accommodates straps up to 32mm width"
          },
          applications: [
            "Heavy machinery, sheet glass, marble slabs, metal crates"
          ]
        },
        {
          id: "od-protector",
          slug: "od-protector",
          name: "OD Protector",
          category: "Protective Packaging Solutions",
          subcategory: "Edge & Corner Protection",
          partner: "Vir Engineered",
          img: "/images/OD_protectors.jpg",
          images: [
            "/images/OD_protectors.jpg",
            "/images/Frame_cut_protectors.jpg"
          ],
          shortDesc: "Outer diameter protectors designed for curved edges like metal coils, paper rolls, and pipes.",
          fullDesc: "Pre-notched flex-edge cardboard and plastic corner protectors specifically designed to wrap around circular outer diameters (OD) and inner diameters (ID) of steel coils, aluminum rolls, wire spools, and paper reels.",
          features: [
            "Flexible notched design conforms seamlessly around any coil radius",
            "Protects expensive coil edges from strapping denting and crane cable damage",
            "Heavy-duty water-resistant construction"
          ],
          specifications: {
            "Caliper": "3mm to 6mm thickness",
            "Leg Length": "50mm x 50mm, 75mm x 75mm notched segments"
          },
          applications: [
            "Steel and aluminum coil manufacturing",
            "Paper mill reels and industrial cable drums"
          ]
        },
        {
          id: "plastic-corners",
          slug: "plastic-corners",
          name: "Plastic Corners",
          category: "Protective Packaging Solutions",
          subcategory: "Edge & Corner Protection",
          partner: "Vir Engineered",
          img: "/images/Side_protection.jpg",
          images: [
            "/images/Side_protection.jpg",
            "/images/Frame_cut_protectors.jpg"
          ],
          shortDesc: "Three-way corner caps to protect furniture, sheets, and boxes from impact damage.",
          fullDesc: "Molded 3-way corner protector caps designed to snap securely onto the tri-corner junctions of furniture, sheet metal stacks, wooden crates, and solar panels.",
          features: [
            "Full 3-dimensional corner protection against drop impacts",
            "Snug friction fit stays attached during handling",
            "Reusable across internal manufacturing stages"
          ],
          specifications: {
            "Material": "Polyethylene / Polypropylene",
            "Internal Depths": "15mm, 25mm, 40mm corner pockets"
          },
          applications: [
            "Solar panel modules, architectural glass, wooden furniture"
          ]
        }
      ],
      "Returnable Packaging": [
        {
          id: "pp-flute-sheet",
          slug: "pp-flute-sheet",
          name: "PP Flute Sheet",
          category: "Protective Packaging Solutions",
          subcategory: "Returnable Packaging",
          partner: "Vir Engineered",
          img: "/images/void-fill.jpg",
          images: [
            "/images/void-fill.jpg"
          ],
          shortDesc: "Lightweight, corrugated plastic sheet. Impact resistant, reusable, and excellent for layer pads, dividers, and surface protection.",
          fullDesc: "Extruded twin-wall corrugated polypropylene (flute) sheets. Highly resistant to water, oils, and chemicals. Ideal for reusable layer pads in glass bottle logistics and protective surface liners.",
          features: [
            "100% waterproof and moisture resistant unlike paper corrugated boards",
            "Washable, hygienic, and reusable for over 50+ logistics loops",
            "Available in anti-static (ESD) grades for electronics"
          ],
          specifications: {
            "Thickness": "2mm to 12mm",
            "GSM Range": "250 GSM to 2500 GSM",
            "Sheet Dimensions": "Custom cut sizes up to 2000mm x 3000mm"
          },
          applications: [
            "Beverage bottling tier sheets, automotive dunnage separators"
          ]
        },
        {
          id: "reusable-pp-corrugated-box",
          slug: "reusable-pp-corrugated-box",
          name: "Reusable PP Corrugated Box",
          category: "Protective Packaging Solutions",
          subcategory: "Returnable Packaging",
          partner: "Vir Engineered",
          img: "/images/void-fill.jpg",
          images: [
            "/images/void-fill.jpg",
            "/images/For Website/Pallets & Crates/Plastic Crate.png"
          ],
          shortDesc: "Custom manufactured reusable and collapsible plastic boxes. Ideal for closed-loop automotive, electronics, and food-grade supply chains.",
          fullDesc: "Custom collapsible and rigid returnable plastic containers fabricated from corrugated PP sheets with reinforced aluminum/plastic ultrasonic welded edges and corner stackers. Replaces single-use cardboard boxes for long-term circular supply chains.",
          features: [
            "Collapsible design saves up to 70% freight volume on return logistics",
            "Durable lifespan of 3-5 years in closed-loop supply chains",
            "Can be customized with internal custom foam dunnage or fabric partitions"
          ],
          specifications: {
            "Material": "Polypropylene Flute Sheet + Plastic/Steel Rivets",
            "Load Capacity": "Up to 50 kg per box (Stackable 5-high)"
          },
          applications: [
            "Automotive vendor-to-assembly-line JIT supply",
            "Electronics component transfer"
          ]
        }
      ]
    }
  },

  "Storage & Material Handling": {
    name: "Storage & Material Handling",
    icon: Archive,
    desc: "Robust warehouse logistics assets including premium pallets, crates, racking systems, and material handling machinery.",
    subcategories: {
      "Pallets": [
        {
          id: "injection-moulded-plastic-pallet",
          slug: "injection-moulded-plastic-pallet",
          name: "Injection Moulded Plastic Pallet",
          category: "Storage & Material Handling",
          subcategory: "Pallets",
          partner: "Vir Engineered",
          img: "/images/For Website/Pallets & Crates/plastic-pallet.png",
          images: [
            "/images/For Website/Pallets & Crates/plastic-pallet.png",
            "/images/pallets.jpg",
            "/images/For Website/Pallets & Crates/Plastic export pallet.png"
          ],
          shortDesc: "Precision injection-molded plastic pallets. High load capacity, uniform dimensions, nestable/rackable, and hygienic.",
          fullDesc: "Manufactured from high-density polyethylene (HDPE) or polypropylene (PP) on precision high-tonnage injection presses. Features consistent dimensions, seamless hygienic surfaces, steel reinforcement tubes for racking, and 4-way forklift entry.",
          features: [
            "100% splinter-free, nail-free, and hygienic for cleanroom environments",
            "Optional internal galvanized steel rods for heavy beam racking loads",
            "Impervious to acids, fats, solvents, and bacteria growth",
            "Easy to steam clean or sanitize"
          ],
          specifications: {
            "Dimensions": "1200 x 1000 mm, 1200 x 800 mm (Euro), 1100 x 1100 mm",
            "Static Load": "Up to 5,000 kg",
            "Dynamic Load": "Up to 1,500 kg",
            "Racking Load": "Up to 1,000 kg (with steel rod inserts)",
            "Entry": "4-Way forklift & pallet truck access"
          },
          applications: [
            "Pharmaceutical cleanrooms, food & dairy processing",
            "Automated high-bay AS/RS warehouse racking",
            "Chemical and retail distribution"
          ]
        },
        {
          id: "roto-moulded-pallet",
          slug: "roto-moulded-pallet",
          name: "Roto Moulded Pallet",
          category: "Storage & Material Handling",
          subcategory: "Pallets",
          partner: "Vir Engineered",
          img: "/images/For Website/Pallets & Crates/Plastic export pallet.png",
          images: [
            "/images/For Website/Pallets & Crates/Plastic export pallet.png",
            "/images/For Website/Pallets & Crates/plastic-pallet.png"
          ],
          shortDesc: "Double-walled rotational molded pallets offering extreme impact resistance, durability, and seamless structure for heavy industrial applications.",
          fullDesc: "Heavy-duty double-walled roto-molded plastic pallets manufactured without seams or joints. Highly resistant to aggressive forklift impacts and heavy metal payloads in foundry and chemical environments.",
          features: [
            "Seamless one-piece double wall construction absorbs brutal forklift impacts",
            "High chemical and corrosion resistance",
            "Smooth easily washable surface meets strict food & pharma hygiene standards"
          ],
          specifications: {
            "Material": "Virgin Food-Grade LLDPE",
            "Load Ratings": "Static 6000 kg / Dynamic 2000 kg",
            "Temperature Range": "-30°C to +60°C (Deep freeze compatible)"
          },
          applications: [
            "Cold storage warehouses, chemical drum storage, meat processing"
          ]
        },
        {
          id: "wooden-pallet",
          slug: "wooden-pallet",
          name: "Wooden Pallet",
          category: "Storage & Material Handling",
          subcategory: "Pallets",
          partner: "Vir Engineered",
          img: "/images/For Website/Pallets & Crates/Wooden pallet.png",
          images: [
            "/images/For Website/Pallets & Crates/Wooden pallet.png",
            "/images/pallets.jpg"
          ],
          shortDesc: "ISPM 15 heat-treated export quality hardwood and pinewood pallets engineered for heavy industrial skids and machinery.",
          fullDesc: "Heavy-duty 2-way and 4-way wooden pallets manufactured from seasoned hardwood, southern yellow pine, or rubberwood. Certified with ISPM-15 heat-treatment (HT) stamping, ensuring compliant overseas customs clearance for export shipments worldwide.",
          features: [
            "ISPM-15 Heat Treated (HT) certified with official IPPC stamping for global export",
            "High static and dynamic load capacity for heavy engineering and automotive skids",
            "Available in custom 2-way and 4-way entry designs with stringer or block construction",
            "Kiln-dried to below 18% moisture content to prevent fungal growth"
          ],
          specifications: {
            "Wood Grade": "Kiln-Dried Hardwood / Selected Pine Wood",
            "Dimensions": "1200 x 1000 mm, 1200 x 800 mm (Euro), Custom machinery skids",
            "Static / Dynamic Load": "Static up to 4,000 kg / Dynamic up to 1,500 kg",
            "Standard": "ISPM 15 & IPPC certified for export"
          },
          applications: [
            "Heavy machinery export skids, automotive CKD parts",
            "Chemical drums, tile/stone crates, global sea freight"
          ]
        },
        {
          id: "compressed-wood-pallet",
          slug: "compressed-wood-pallet",
          name: "Compressed Wood Pallet",
          category: "Storage & Material Handling",
          subcategory: "Pallets",
          partner: "Vir Engineered",
          img: "/images/For Website/Pallets & Crates/Wooden pallet.png",
          images: [
            "/images/For Website/Pallets & Crates/Wooden pallet.png",
            "/images/pallets.jpg"
          ],
          shortDesc: "Eco-friendly, compressed wood fiber pallets. Meet ISPM 15 standards without fumigation. Stackable, space-saving design.",
          fullDesc: "Manufactured from dried wood shavings and bio-resin compressed under high pressure and heat (over 200°C). Completely pest-free and ISPM 15 exempt worldwide without requiring chemical fumigation or heat treatment certificates.",
          features: [
            "ISPM 15 compliant by design – zero fumigation certificates required for export",
            "Space-saving nestable design saves up to 60% warehouse storage space",
            "Smooth rounded edges and no nails protect cargo from puncture"
          ],
          specifications: {
            "Dimensions": "1200 x 1000 mm & 1200 x 800 mm",
            "Static Load": "Up to 3,000 kg",
            "Dynamic Load": "Up to 1,000 kg",
            "Nesting Ratio": "50 pallets stack into a single 2-meter tower"
          },
          applications: [
            "One-way export air & ocean shipments to Europe, US, Asia"
          ]
        }
      ],
      "Storage Solutions": [
        {
          id: "plastic-crates-bins",
          slug: "plastic-crates-bins",
          name: "Plastic Crates & Bins",
          category: "Storage & Material Handling",
          subcategory: "Storage Solutions",
          partner: "Vir Engineered",
          img: "/images/For Website/Pallets & Crates/Plastic Crate.png",
          images: [
            "/images/For Website/Pallets & Crates/Plastic Crate.png"
          ],
          shortDesc: "Heavy-duty plastic crates for storage and material handling. Available in stackable, nesting, and collapsible designs.",
          fullDesc: "Heavy-duty industrial storage crates and picking bins manufactured from virgin HDPE. Engineered with reinforced ribs, ergonomic handholds, and optional drop-in partition dividers.",
          features: [
            "High impact strength and load bearing capacity",
            "Interlocking base design enables secure high stacking",
            "Resistant to moisture, oils, and harsh cleaning chemicals"
          ],
          specifications: {
            "Types": "Solid, Perforated, Collapsible, Nestable",
            "Standard Sizes": "600x400x120mm up to 600x400x420mm"
          },
          applications: [
            "Automotive component picking, apparel distribution, agricultural harvest"
          ]
        },
        {
          id: "warehouse-racking-solutions",
          slug: "warehouse-racking-solutions",
          name: "Warehouse Racking Solutions",
          category: "Storage & Material Handling",
          subcategory: "Storage Solutions",
          partner: "Vir Engineered",
          img: "/images/handling.jpg",
          images: [
            "/images/handling.jpg"
          ],
          shortDesc: "Selective pallet racking, drive-in racking, and heavy-duty shelving units engineered for optimized warehouse volume utilization.",
          fullDesc: "Turnkey warehouse racking systems manufactured from high-yield structural steel. Engineered to maximize vertical cubic storage and streamline forklift access in high-density logistics hubs.",
          features: [
            "Heavy-duty beam profiles with safety lock pins",
            "Custom engineered configurations: Selective, Drive-in, Cantilever, Mezzanine",
            "Durable industrial powder coating"
          ],
          specifications: {
            "Beam Capacity": "1000 kg to 4000 kg per shelf tier",
            "Upright Height": "Up to 12 meters"
          },
          applications: [
            "Fulfillment centers, manufacturing raw material stores, cold storage"
          ]
        }
      ],
      "Material Handling Equipment (MHE)": [
        {
          id: "industrial-drum-tilter-handler",
          slug: "industrial-drum-tilter-handler",
          name: "Industrial Drum Tilter & Handler",
          category: "Storage & Material Handling",
          subcategory: "Material Handling Equipment (MHE)",
          partner: "Vir Engineered",
          img: "/images/For Website/MHE/Drumtilter.png",
          images: [
            "/images/For Website/MHE/Drumtilter.png",
            "/images/handling.jpg"
          ],
          shortDesc: "Heavy-duty hydraulic drum lifter, tilter, and handler designed for 200-liter steel and plastic drums.",
          fullDesc: "Ergonomic hydraulic drum lifter and rotator designed to lift, transport, and 360-degree invert standard 200-liter (55 gallon) steel and HDPE drums. Enables controlled, spill-free dispensing of liquids and powders.",
          features: [
            "Heavy-duty geared clamp rotates drums smoothly through 360 degrees",
            "Hydraulic foot pump and precision lowering release valve",
            "Eliminates back strain and hazardous material spill risks"
          ],
          specifications: {
            "Lifting Capacity": "350 kg to 500 kg",
            "Lifting Height": "Up to 1.5 meters to 2.5 meters",
            "Drum Types": "200L Steel & Plastic L-ring drums"
          },
          applications: [
            "Chemical blending plants, paint & resin factories, lubricant depots"
          ]
        },
        {
          id: "industrial-stackers",
          slug: "industrial-stackers",
          name: "Industrial Stackers",
          category: "Storage & Material Handling",
          subcategory: "Material Handling Equipment (MHE)",
          partner: "Vir Engineered",
          img: "/images/For Website/MHE/Stacker.png",
          images: [
            "/images/For Website/MHE/Stacker.png",
            "/images/For Website/MHE/HPT.png"
          ],
          shortDesc: "Manual, semi-electric, and battery-operated stackers for lifting, loading, and racking palletized materials.",
          fullDesc: "Robust pallet stackers available in manual hydraulic, semi-electric (electric lift, manual push), and fully electric walkie configurations for efficient pallet racking in narrow aisles.",
          features: [
            "Heavy-duty C-section steel mast profiles for rigid high lifting",
            "Overload protection bypass valve for operator safety",
            "Compact turning radius for operation in tight aisles"
          ],
          specifications: {
            "Capacity": "1000 kg, 1500 kg, 2000 kg",
            "Lift Heights": "1.6m, 2.5m, 3.0m, 3.5m",
            "Power": "Manual Hydraulic / 12V Battery Electric"
          },
          applications: [
            "Loading/unloading trucks, stacking pallets onto warehouse mezzanine & racks"
          ]
        },
        {
          id: "hydraulic-pallet-truck",
          slug: "hydraulic-pallet-truck",
          name: "Hydraulic Pallet Truck",
          category: "Storage & Material Handling",
          subcategory: "Material Handling Equipment (MHE)",
          partner: "Vir Engineered",
          img: "/images/For Website/MHE/HPT.png",
          images: [
            "/images/For Website/MHE/HPT.png",
            "/images/For Website/MHE/Stacker.png"
          ],
          shortDesc: "Ergonomic manual hand pallet trucks with durable wheels and pump-handle controls for smooth warehouse movement.",
          fullDesc: "Industrial-grade hand pallet truck (HPT) with integrated leak-proof hydraulic cast pump, chrome-plated piston, and heavy polyurethane entry rollers.",
          features: [
            "One-piece galvanized leak-proof hydraulic pump with overload relief",
            "Polyurethane steer and load wheels ensure silent, non-marking floor movement",
            "Ergonomic 3-position hand control lever (Lift, Neutral, Lower)"
          ],
          specifications: {
            "Load Capacity": "2.5 Ton (2500 kg) & 3.0 Ton (3000 kg)",
            "Fork Dimensions": "1150 x 550 mm & 1220 x 685 mm",
            "Lowered / Raised Height": "85 mm / 200 mm"
          },
          applications: [
            "Universal warehouse pallet staging, loading docks, retail backrooms"
          ]
        },
        {
          id: "battery-operated-pallet-truck",
          slug: "battery-operated-pallet-truck",
          name: "Battery Operated Pallet Truck",
          category: "Storage & Material Handling",
          subcategory: "Material Handling Equipment (MHE)",
          partner: "Vir Engineered",
          img: "/images/handling.jpg",
          images: [
            "/images/handling.jpg",
            "/images/For Website/MHE/HPT.png"
          ],
          shortDesc: "Full electric pallet jacks for rapid load transport and reduced labor strain in high-volume fulfillment centers.",
          fullDesc: "Powered electric walkie pallet truck equipped with high-torque AC drive motor and fast-charging Lithium battery for high-efficiency horizontal cargo transport.",
          features: [
            "Full electric drive and electric lift eliminates physical exertion",
            "Emergency belly-button reverse switch on tiller handle for operator safety",
            "High-capacity Lithium battery with opportunity charging capability"
          ],
          specifications: {
            "Capacity": "1500 kg to 2000 kg",
            "Travel Speed": "Up to 5 km/h",
            "Battery": "24V Lithium-Ion plug & play cartridge"
          },
          applications: [
            "Large distribution warehouses, retail supermarkets, transport hubs"
          ]
        },
        {
          id: "industrial-forklift",
          slug: "industrial-forklift",
          name: "Industrial Forklift",
          category: "Storage & Material Handling",
          subcategory: "Material Handling Equipment (MHE)",
          partner: "Vir Engineered",
          img: "/images/For Website/MHE/Forklift.png",
          images: [
            "/images/For Website/MHE/Forklift.png",
            "/images/handling.jpg"
          ],
          shortDesc: "Diesel, LPG, and electric forklifts designed for heavy-duty material lifting and loading operations.",
          fullDesc: "Counterbalanced industrial forklifts engineered for harsh factory yards and indoor warehouse loading. Features high visibility wide-view masts, power steering, and fuel-efficient engines.",
          features: [
            "Wide-view mast ensures optimal driver visibility",
            "Heavy-duty steer axle and counterweight for stability with maximum loads",
            "Available in Diesel, Electric AC, and dual-fuel LPG"
          ],
          specifications: {
            "Capacity": "2.0 Ton, 3.0 Ton, 5.0 Ton, 10.0 Ton",
            "Lift Height": "3.0 meters to 6.0 meters triplex container mast",
            "Engine / Motor": "High-torque industrial diesel / 48V-80V AC Electric"
          },
          applications: [
            "Container stuffing/destuffing, heavy steel yards, factory material intake"
          ]
        },
        {
          id: "dock-leveler",
          slug: "dock-leveler",
          name: "Dock Leveler",
          category: "Storage & Material Handling",
          subcategory: "Material Handling Equipment (MHE)",
          partner: "Vir Engineered",
          img: "/images/For Website/MHE/hydraulic-dock-leveler-500x500.png",
          images: [
            "/images/For Website/MHE/hydraulic-dock-leveler-500x500.png",
            "/images/For Website/MHE/Forklift.png"
          ],
          shortDesc: "Hydraulic dock levelers bridging the gap between warehouse floors and vehicle beds, enabling rapid loading/unloading.",
          fullDesc: "Stationary electro-hydraulic dock levelers with telescoping or hinged lip. Compensates for height differences between warehouse loading bays and various truck bed heights, enabling forklifts to drive straight into containers.",
          features: [
            "Heavy-duty checkered tear-plate platform with anti-slip surface",
            "Dual hydraulic lift cylinders with emergency velocity fuses",
            "Integrated yellow safety toe guards on both sides"
          ],
          specifications: {
            "Load Capacity": "6 Ton, 9 Ton, 12 Ton dynamic load",
            "Standard Dimensions": "2000 x 2500 mm (Pit mounted)",
            "Operating Range": "+300 mm above dock / -300 mm below dock"
          },
          applications: [
            "Logistics dispatch bays, automated cross-docking facilities"
          ]
        }
      ]
    }
  },

  "Speciality Tapes": {
    name: "Speciality Tapes",
    icon: Layers,
    desc: "Technical adhesive solutions engineered for specialized masking, strapping, bonding, and sealing operations in heavy industries.",
    subcategories: {
      "Speciality Tapes": [
        {
          id: "industrial-self-adhesive-tapes",
          slug: "industrial-self-adhesive-tapes",
          name: "Industrial Self Adhesive Tapes",
          category: "Speciality Tapes",
          subcategory: "Speciality Tapes",
          partner: "Vir Engineered",
          img: "/images/strapping.jpg",
          images: [
            "/images/strapping.jpg",
            "/images/moisture.jpg"
          ],
          shortDesc: "High-performance tapes including filament tapes, double-sided tapes, masking tapes, and foam tapes for industrial bonding, splicing, and surface protection.",
          fullDesc: "Complete spectrum of technical adhesive tapes manufactured for demanding industrial applications. Includes cross-weave fiberglass filament tapes for heavy bundling, high-temperature masking tapes, double-sided acrylic foam tapes, and BOPP carton sealing tapes.",
          features: [
            "Fiberglass reinforced filament tapes with extreme tensile break strength",
            "High shear adhesion and weather-resistant adhesive formulas",
            "Leaves zero residue when peeled during painting/masking processes"
          ],
          specifications: {
            "Adhesive Types": "Synthetic Rubber, Solvent Acrylic, Hot Melt",
            "Widths": "12mm, 24mm, 48mm, 72mm or custom slit logs",
            "Temperature Range": "-20°C up to 180°C for high-temp grades"
          },
          applications: [
            "Heavy coil bundling, pallet unitization, HVAC foil sealing, automotive masking"
          ]
        },
        {
          id: "tesa-tapes",
          slug: "tesa-tapes",
          name: "TESA Tapes",
          category: "Speciality Tapes",
          subcategory: "Speciality Tapes",
          partner: "Authorized Industrial Partner",
          img: "/images/strapping.jpg",
          images: [
            "/images/strapping.jpg",
            "/images/Website Images/Aluminium Barrier Foil Bag/Barrier Foil Bag.jpg"
          ],
          shortDesc: "World-class tesa® high-performance adhesive tapes engineered for industrial bonding, heavy strapping, surface protection, masking, and high-temp splicing.",
          fullDesc: "Authorized distributor of authentic tesa® industrial adhesive solutions. We supply the comprehensive lineup of tesa® high-performance tapes including cross-filament strapping tapes, ACXplus acrylic core bonding tapes, precision masking tapes, double-sided filmic & tissue tapes, and high-temperature splicing tapes tailored for automotive, electronics, paper, and heavy manufacturing sectors.",
          features: [
            "Authentic premium tesa® industrial grade adhesive technology",
            "tesa® ACXplus structural bonding series for permanent invisible mounting",
            "Extreme tensile strength tesa® fiberglass filament tapes for heavy coil & pallet securing",
            "High-temperature resistance up to 220°C for powder coating and automotive e-coat lines",
            "Clean removal without adhesive ghosting or residue transfer"
          ],
          specifications: {
            "Brand": "tesa® SE (Germany)",
            "Available Series": "tesa® ACXplus, tesa® Filament (4287/4288/4590), tesa® Precision Mask (4334), tesa® Double Sided",
            "Adhesive Chemistry": "Modified Acrylic, Natural Rubber, Synthetic Rubber, Silicone",
            "Thickness Options": "0.08 mm up to 3.0 mm (ACXplus)",
            "Roll Widths": "Custom precision slitting from 6 mm to 1200 mm logs"
          },
          applications: [
            "Automotive exterior trim, emblem, and wire harness bundling",
            "Electronics display bonding and heat dissipation grounding",
            "Paper mill & corrugated board continuous flying splices",
            "Heavy-duty metal pipe, steel coil, and beam strapping"
          ]
        }
      ]
    }
  },

  "Packaging Essentials": {
    name: "Packaging Essentials",
    icon: HelpCircle,
    desc: "Critical logistics quality control tools to monitor impact, ensure cargo tracking, enforce shipping safety, and prevent operator injury.",
    subcategories: {
      "Packaging Essentials": [
        {
          id: "shock-and-tilt-indicator",
          slug: "shock-and-tilt-indicator",
          name: "Shock and Tilt Indicator",
          category: "Packaging Essentials",
          subcategory: "Packaging Essentials",
          partner: "Vir Engineered",
          img: "/images/Website Images/Moisture Control Solutions/HI Card.jpg",
          images: [
            "/images/Website Images/Moisture Control Solutions/HI Card.jpg",
            "/images/moisture.jpg"
          ],
          shortDesc: "Precision mechanical indicators that turn red when shipments experience excessive shock, impact, or tilting during transport. Deters mishandling.",
          fullDesc: "Tamper-proof visual impact (ShockWatch style) and tilt (TiltWatch style) sensor labels. Affixed to high-value crated machinery, transformers, medical diagnostics, and glass shipments. If dropped, bumped, or tipped past designated thresholds, the central tube irreversibly turns bright red.",
          features: [
            "Irreversible red activation cannot be reset or falsified",
            "Proven deterrent that reduces carrier mishandling by over 70%",
            "Supplied with alert companion warning labels for bill of lading"
          ],
          specifications: {
            "Sensitivity G-Ratings": "5G, 10G, 15G, 25G, 37G, 50G, 75G",
            "Tilt Sensitivity": "Activates at >80° tilt angle",
            "Adhesive": "Aggressive acrylic pressure-sensitive adhesive"
          },
          applications: [
            "CNC machinery, wind turbine components, MRI machines, fragile avionics"
          ]
        },
        {
          id: "rfid-seal",
          slug: "rfid-seal",
          name: "RFID Seal",
          category: "Packaging Essentials",
          subcategory: "Packaging Essentials",
          partner: "Vir Engineered",
          img: "/images/moisture.jpg",
          images: [
            "/images/moisture.jpg"
          ],
          shortDesc: "Smart high-security seals equipped with RFID tags. Enables contact-free automatic tracking, container identification, and anti-tamper security.",
          fullDesc: "Next-generation ISO 17712 high-security container bolt seals embedded with passive UHF RFID chips. Allows automated gate scanning, instant container number verification, and tamper detection without manual visual logging.",
          features: [
            "Long-range UHF RFID read capability up to 5-8 meters at port gates",
            "Encrypted unique serial number eliminates counterfeiting",
            "ISO 17712 \"H\" high-security compliance for international customs"
          ],
          specifications: {
            "RFID Protocol": "EPC Class 1 Gen 2 / ISO 18000-6C",
            "Frequency": "860-960 MHz (Global UHF)",
            "Bolt Material": "High-carbon steel pin with ABS casing"
          },
          applications: [
            "Customs bonded ocean containers, border transit tracking, pharmaceutical freight"
          ]
        },
        {
          id: "container-bolt-seal",
          slug: "container-bolt-seal",
          name: "Container Bolt Seal",
          category: "Packaging Essentials",
          subcategory: "Packaging Essentials",
          partner: "Vir Engineered",
          img: "/images/moisture.jpg",
          images: [
            "/images/moisture.jpg"
          ],
          shortDesc: "Heavy-duty steel ISO 17712 compliant bolt seals. Enforces tamper-evidence and physical security on shipping container doors.",
          fullDesc: "Certified ISO 17712 'H' classification high-security barrier bolt seal. Built with an 18mm heavy steel core locking mechanism that requires industrial bolt cutters for removal, deterring theft and cargo tampering.",
          features: [
            "ISO 17712:2013 and C-TPAT compliant for US and international customs",
            "Anti-spin mechanism prevents high-speed friction tampering",
            "Laser engraved matching sequential serial numbering and barcode on bolt and barrel"
          ],
          specifications: {
            "Bolt Diameter": "10mm hardened steel pin (18mm lock head)",
            "Tensile Strength": ">15 kN shear and tensile rating",
            "Customization": "Laser engraved company name, logo, barcode, QR code"
          },
          applications: [
            "ISO 20ft & 40ft marine shipping containers, intermodal rail cars, bonded trucks"
          ]
        },
        {
          id: "finger-friendly-ceramic-cutters",
          slug: "finger-friendly-ceramic-cutters",
          name: "Finger Friendly Ceramic Cutters",
          category: "Packaging Essentials",
          subcategory: "Packaging Essentials",
          partner: "Vir Engineered",
          img: "/images/handling.jpg",
          images: [
            "/images/handling.jpg"
          ],
          shortDesc: "Ergonomic safety cutters with custom ceramic blades. Sharp enough to cut strapping and wrapping, but safe to touch to prevent workplace injuries.",
          fullDesc: "Industrial safety box and strap cutters equipped with advanced zirconium oxide ceramic blades. Stay sharp up to 11 times longer than steel blades, never rust, and feature a proprietary finger-friendly grind that cuts packaging materials cleanly while reducing accidental cut injuries to workers.",
          features: [
            "Non-sparking, non-conductive, and 100% rust-free ceramic blade",
            "Lasts up to 11x longer than comparable carbon steel utility blades",
            "Auto-retracting spring-loaded blade mechanism for workplace safety compliance"
          ],
          specifications: {
            "Blade Material": "100% Zirconium Oxide Ceramic",
            "Body Material": "Durable glass-filled nylon / rubber grip",
            "Blade Change": "Tool-less quick blade change design"
          },
          applications: [
            "Warehouse package unpacking, strapping line cutting, cleanroom operations"
          ]
        }
      ]
    }
  }
};

// Helper function to get all products flattened in an array
export function getAllProducts() {
  const products = [];
  Object.keys(productCategories).forEach((categoryKey) => {
    const category = productCategories[categoryKey];
    Object.keys(category.subcategories).forEach((subcategoryKey) => {
      const subcatProducts = category.subcategories[subcategoryKey];
      subcatProducts.forEach((prod) => {
        products.push(prod);
      });
    });
  });
  return products;
}

// Helper function to find a product by slug
export function getProductBySlug(slug) {
  if (!slug) return null;
  const allProducts = getAllProducts();
  return allProducts.find((p) => p.slug.toLowerCase() === slug.toLowerCase()) || null;
}

// Helper function to find related products
export function getRelatedProducts(currentSlug, categoryName, limit = 4) {
  const allProducts = getAllProducts();
  const filtered = allProducts.filter(
    (p) => p.slug !== currentSlug && (categoryName ? p.category === categoryName : true)
  );
  // If there are not enough in the same category, fill with other products
  if (filtered.length < limit) {
    const others = allProducts.filter((p) => p.slug !== currentSlug && !filtered.includes(p));
    return [...filtered, ...others].slice(0, limit);
  }
  return filtered.slice(0, limit);
}
